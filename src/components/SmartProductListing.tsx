import ProductListing from "./ProductListing";
import { useParams } from "react-router-dom";
import { products } from "../utils/dummyData";
import { useEffect, useState } from "react";
import { ProductDataType } from "../utils/customTypes";
import { apiUrl } from "../utils/globals";

const SmartProductListing = () => {
  //Get the Id of product user wants to see
  const { id } = useParams();
  //Assume we are fetching data from an api here
  const [curProduct, setCurProduct] = useState<ProductDataType | null>(null);

  //FIXME some problem here not working properly
  useEffect(() => {
    if (id != undefined) {
      (async () => {
        const res = await fetch(`${apiUrl}/product/id/${id}`);
        const resData = await res.json();
        if(resData.data){
            setCurProduct(resData.data);
            console.log(resData.data);
        }
      })();
    }
  }, []);

  return curProduct != undefined ? (
    <ProductListing
      id={curProduct.id}
      name={curProduct.name}
      seller={curProduct.seller}
      price={curProduct.price}
      description={curProduct.description}
      image={curProduct.image}
    />
  ) : (
    <div className="flex justify-center items-center text-center h-full w-full text-lg">
      Sorry, We couldn't find the prouct you were looking for !
    </div>
  );
};

export default SmartProductListing;
