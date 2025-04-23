import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase/firebaseInit";
import { Order, OrderItem } from "../pages/Products/types";


const STOCK_DOC_PATH = "stock/beers";

export const saveInitialBeerStock = async (beers: Order[]) => {
  await setDoc(doc(db, STOCK_DOC_PATH), {
    last_updated: new Date().toISOString(),
    beers,
  });
};

export const updateBeerStockFromOrder = async (items: { name: string; quantity: number }[]) => {
    const stockRef = doc(db, STOCK_DOC_PATH);
    const stockSnap = await getDoc(stockRef);
  
    if (!stockSnap.exists()) throw new Error("Stock de cervezas no encontrado");
  
    const stockData = stockSnap.data();
    const updatedBeers = stockData.beers.map((beer: OrderItem) => {
      const orderedItem = items.find((item) => item.name === beer.name);
      if (orderedItem) {
        return {
          ...beer,
          quantity: Math.max(beer.quantity - orderedItem.quantity, 0),
        };
      }
      return beer;
    });
  
    await updateDoc(stockRef, {
      beers: updatedBeers,
      last_updated: new Date().toISOString(),
    });
  };
  