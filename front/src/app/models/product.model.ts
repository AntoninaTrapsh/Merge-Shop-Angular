export interface Product {
  name: string,
  price: string,
  image: string,
  description: string
}

export interface CartProduct {
  name: string,
  price: number,
  quantity: number
}

export enum ChangeCountActions {
  INCREASE = "increase",
  DECREASE = "decrease"
}


