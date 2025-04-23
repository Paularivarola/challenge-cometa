export interface Beer {
  name: string;
  price: number;
  quantity: number;
}

export interface BeersResponse {
  last_updated: string;
  beers: Beer[];
}

export interface BeerDetailData {
  name: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  ingredients: string[];
  price: number;
  currency: string;
  total_price: number;
}
