export enum ProductActionTypes{
  GET_ALL_PRODUCTS="[Product] get all products",
  NEW_PRODUCTS="[Product] new product",
  EDIT_PRODUCTS="[Product] edit product",
  SEARCH_PRODUCTS="[Product] searcH product",
  SELECTED_PRODUCTS="[Product] Selected product",
  DETAIL_PRODUCT="[Product] Detail product",
  DELETE_PRODUCTS="[Product] Delete product",
  UPDATE_PRODUCTS="[Product] Update product",

  // Commandes
  GET_ALL_COMMANDES="[COMMANDE] get all COMMANDEs",
  NEW_COMMANDES="[COMMANDE] new COMMANDE",
  EDIT_COMMANDES="[COMMANDE] edit COMMANDE",
  SEARCH_COMMANDES="[COMMANDE] searcH COMMANDE",
  DETAIL_COMMANDE="[COMMANDE] Detail COMMANDE",
  UPDATE_COMMANDES="[COMMANDE] Update COMMANDE",
    // Vendeuse
    GET_ALL_VENDEUSES="[VENDEUSE] get all VENDEUSEs",
    NEW_VENDEUSES="[VENDEUSE] new VENDEUSE",
    EDIT_VENDEUSES="[VENDEUSE] edit VENDEUSE",
    SEARCH_VENDEUSES="[VENDEUSE] searcH VENDEUSE",
    SELECTED_VENDEUSES="[VENDEUSE] Selected VENDEUSE",
    DETAIL_VENDEUSE="[VENDEUSE] Detail VENDEUSE",
    DELETE_VENDEUSES="[VENDEUSE] Delete VENDEUSE",
    UPDATE_VENDEUSES="[VENDEUSE] Update VENDEUSE",

  // PRESTATAIRE
  GET_ALL_PRESTATAIRES="[PRESTATAIRE] get all PRESTATAIREs",
  NEW_PRESTATAIRES="[PRESTATAIRE] new PRESTATAIRE",
  EDIT_PRESTATAIRES="[PRESTATAIRE] edit PRESTATAIRE",
  SEARCH_PRESTATAIRES="[PRESTATAIRE] searcH PRESTATAIRE",
  SELECTED_PRESTATAIRES="[PRESTATAIRE] Selected PRESTATAIRE",
  DETAIL_PRESTATAIRE="[PRESTATAIRE] Detail PRESTATAIRE",
  DELETE_PRESTATAIRES="[PRESTATAIRE] Delete PRESTATAIRE",
  UPDATE_PRESTATAIRES="[PRESTATAIRE] Update PRESTATAIRE",

  //ACHAT
  GET_ALL_ACHATS="[ACHAT] get all ACHATs",
  NEW_ACHATS="[ACHAT] new ACHAT",
  SEARCH_ACHATS="[ACHAT] searcH ACHAT",



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
