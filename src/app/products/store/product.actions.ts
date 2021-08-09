import { Action } from "@ngrx/store";

export enum ProductsActionsType {
  ADD_PRODUCT = '[Products] Add Product'
}

export class AddProduct implements Action {
  readonly type = ProductsActionsType.ADD_PRODUCT;

  constructor(public payload: any) { }
}
