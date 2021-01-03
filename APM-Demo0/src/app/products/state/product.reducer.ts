/* NgRx */
import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';

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
  initialState, //initial value
  on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    console.log('original state' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
      // showProductCode: state.showProductCode = false,
    };
  })
);

