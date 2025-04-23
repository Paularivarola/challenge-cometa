export interface OrderItem {
  name: string;
  price_per_unit: number;
  quantity: number;
  total: number;
}

export interface Round {
  created: string;
  items: {
    name: string;
    quantity: number;
  }[];
}

export interface Order {
  created: string;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  items: OrderItem[];
  rounds: Round[];
}
