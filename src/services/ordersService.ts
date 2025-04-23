import { doc, collection, addDoc, getDocs, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase/firebaseInit";
import { Order } from "../pages/Products/types";
import { updateBeerStockFromOrder } from "./stockService";
import { BeerDetailData, BeersResponse } from "../api/types";

export const saveOrder = async (orderData: Order): Promise<string> => {
  try {
    await updateBeerStockFromOrder(orderData.items.map((item) => ({
      name: item.name,
      quantity: item.quantity
    })));
    const docRef = await addDoc(collection(db, "orders"), orderData);
    return docRef.id;
  } catch (error) {
    console.error("Error al guardar la orden:", error);
    throw error;
  }
};

export const getOrders = async (): Promise<Order[]> => {
  const querySnapshot = await getDocs(collection(db, "orders"));
  return querySnapshot.docs.map((doc) => {
    const data = doc.data() as Order;
    return {
      id: doc.id,
      ...data,
    };
  });
};

const STOCK_DOC_PATH = "stock/beers";

export const saveInitialBeerStock = async (beers: Order[]) => {
  await setDoc(doc(db, STOCK_DOC_PATH), {
    last_updated: new Date().toISOString(),
    beers,
  });
};

export const getBeerStock = async (): Promise<BeersResponse> => {
  const stockSnap = await getDoc(doc(db, "stock/beers"));
  if (!stockSnap.exists()) throw new Error("Stock no encontrado");
  return stockSnap.data() as BeersResponse;
};

export const saveBeer = async (beer: BeerDetailData) => {
  const docRef = doc(db, "beers", beer.name);
  await setDoc(docRef, beer);
};

export const getBeerByName = async (name: string): Promise<BeerDetailData | null> => {
  const docRef = doc(db, "beers", name);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? (docSnap.data() as BeerDetailData) : null;
};