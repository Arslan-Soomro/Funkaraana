import { ProductDataType } from "../utils/customTypes";
import { apiUrl } from "../utils/globals";

const ProductListing = ({id, name, seller, price, image, description}: ProductDataType) => {
  return (
    <section className="w-full h-full lg:flex flex-row justify-center py-2 px-2">
      {/*Image Part */}
      <div className="w-full max-h-[500px] lg:w-2/5 rounded">
        <img
          src={apiUrl + "/" + image}
          className="object-contain rouded w-full max-h-[500px]"
        />
      </div>
      {/*Text Part */}
      <div className="flex-1 p-2 lg:text-left text-center">
        <div className="mb-2">
          <h2 className="font-bold text-xl xs:text-2xl text-sbrclr-600">{name}</h2>
          <p className="text-sm text-brclr-600">by {seller}</p>
        </div>
        <div className="pr-5 mb-5 text-sm xs:text-base text-nclr-800">
          <p>{description}</p>
        </div>
        <div className="mb-5">
          <p className="text-2xl font-bold text-brclr-600">Rs. {price}k</p>
          <p className="mb-1 text-sm text-nclr-500">Expected Delivery Date: 2 working days</p>
          <p className="mb-1 font-bold text-lg text-sbrclr-600">Reviews: 5.0</p>
        </div>
        
        <button className="px-5 py-2 rounded-full bg-brclr-600 shadow-lg shadow-brclr-300 text-white font-bold transition-all hover:bg-brclr-700 active:bg-brclr-800">Add to Cart</button>
        
        {/*
        Button Variation With Border
        <button className="border-2 border-brclr-600 px-5 py-2 rounded-full text-brclr-600 font-bold transition-all hover:text-white hover:bg-brclr-600 active:bg-brclr-700">Add to Cart</button>
        */}
    </div>
    </section>
  );
};

export default ProductListing;
