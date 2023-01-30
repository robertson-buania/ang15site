export enum ProductActionTypes{
  GET_ALL_PRODUCTS="[Product] get all products",
  GET_AVAILABLE_PRODUCTS="[Product] get available products",
  GET_SELECTED_PRODUCTS="[Product] get selected products",
  NEW_PRODUCTS="[Product] new product",
  EDIT_PRODUCTS="[Product] edit product",
  SEARCH_PRODUCTS="[Product] searcH product",
  SELECTED_PRODUCTS="[Product] Selected product",
  DELETE_PRODUCTS="[Product] Delete product",
  UPDATE_PRODUCTS="[Product] Update product"

}

export interface ActionEvent{
  type:ProductActionTypes,
  payload?:any
}

export enum DataStateEnum{
  LOADINg,
  LOADED,
  ERROR
}

export interface AppDataState<T>{

  dataState?:DataStateEnum;
  data?:T;
  errorMessage?:string

}
