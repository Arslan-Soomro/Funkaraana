import { ProductDataType } from "../utils/customTypes";
//import { products } from "../utils/dummyData";
import ProductCard from "./ProductCard";

//We assume this data is fetched through some api

//TODO let product data be passed as a prop
const CollectionList = ({products} : {products: ProductDataType[] | undefined}) => {
  return (
    <div className="res-grid w-full p-2 overflow-y-auto">
      {products ? products.map((val, ind) => (
        <ProductCard
          id={val.id}
          name={val.name}
          price={val.price}
          seller={val.seller}
          image={val.image}
          description={val.description}
          key={ind}
        />
      )) : "Loading"}
    </div>
  );
};

export default CollectionList;
