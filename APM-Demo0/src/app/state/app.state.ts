import { ProductState } from '../products/state/product.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  products: ProductState;
  user: any;
}
