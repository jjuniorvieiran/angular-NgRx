/* NgRx */
import { createReducer, on, createAction } from '@ngrx/store';
import * as AppState from '../../state/app.state';

import { Product } from '../product';

export interface State extends AppState.State {
  products: ProductState;
}

// State for this feature (Product)
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export const productReducer = createReducer(
  { showProductCode: true }, //initial value
  on(createAction('[Product] Toggle Product Code'), state => {
    console.log('original state' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
      // showProductCode: state.showProductCode = false,
    };
  })
);

