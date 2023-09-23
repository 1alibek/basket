import { useEffect } from "react";
import { createContext, useState } from "react";
export const BasketContext = createContext(null);
const BasketProvider = ({ children }) => {
    let storage = localStorage.getItem("basket-post");
    console.log(JSON.parse(storage))
  const [store, setStore] = useState (JSON.parse(storage)||[]);

  const setBasket = (data) => {
    setStore([...store, data]);
  };
  useEffect(() => {
  localStorage.setItem("basket-post", JSON.stringify(store));
    }, [store]);

  return (
    <BasketContext.Provider value={{ setBasket, store,setStore }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
