/* NgRx */
import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import * as ProductActions from './product.actions';

import { Product } from '../product';

// State for this feature (Product)
const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

export interface State extends AppState.State {
  products: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}



// Selector functions
const getProductFeatureState = createFeatureSelector<ProductState>('products');

//it will be used in product-list.component.ts
export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode //projector functin -> it will return showProductCode boolean
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);



export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  }),
  on(ProductActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProduct: action.product
    };
  }),
  on(ProductActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProduct: null
    };
  }),
  on(ProductActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProduct: {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
      }
    };
  })
);

