import CollectionList from "./CollectionList";
import ProductCard from "./ProductCard";

const ViewProducts = () => {
  return (
    <section className="p-4 h-full flex flex-col">
      <div className=" text-brclr-600 text-xl font-bold bg-white p-3 rounded-lg shadow-md shadow-neutral-100">Your Proudcts</div>
      <CollectionList />
    </section>
  );
};

export default ViewProducts;
