import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/global-context";
import { ProductDataType } from "../utils/customTypes";
import { apiUrl } from "../utils/globals";
import CollectionList from "./CollectionList";
import ProductCard from "./ProductCard";

const ViewProducts = () => {
  const [prods, setProds] = useState<ProductDataType[] | null>(null);
  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      const url = `${apiUrl}/product/user/${state.userInfo?.id}`;
      const res = await fetch(url);
      const resData = await res.json();
      setProds(resData.data);
    })();
  }, []);

  return (
    <section className="p-4 h-full flex flex-col">
      <div className=" text-brclr-600 text-xl font-bold bg-white p-3 rounded-lg shadow-md shadow-neutral-100">
        Your Proudcts
      </div>
      <CollectionList products={prods} buttonsOff={true} />
    </section>
  );
};

export default ViewProducts;
