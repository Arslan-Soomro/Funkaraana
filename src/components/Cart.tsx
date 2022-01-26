import CartCard from "./CartCard";

const Cart = ({
  prods,
}: {
  prods?: { id: number; name: string; seller: string; price: number }[];
}) => {
  return prods != undefined ? (
    <section className="w-full h-full py-2 px-2">
      {/*Products Section */}
      {prods.map((prod, i) => (
        <CartCard
          key={i}
          id={prod.id}
          name={prod.name}
          seller={prod.seller}
          price={prod.price}
        />
      ))}

      {/*Billing Section */}
      <div className="my-5 w-full md:w-3/4 mx-auto text-sm xs:text-base">
        <div className="space-y-4 w-full p-5 bg-nclr-50 rounded">
          <div className="flex justify-between p-2 border-b text-nclr-600">
            <p>Subtotal</p>
            <p className="font-bold">Rs. 21000</p>
          </div>
          <div className="flex justify-between p-2 border-b text-nclr-600">
            <p>Shipping</p>
            <p className="font-bold">Rs. 2000</p>
          </div>
          <div className="flex justify-between p-2 border-b text-nclr-600">
            <p>Tax</p>
            <p className="font-bold">Rs. 1000</p>
          </div>
          <div className="flex justify-between p-2 border-b font-bold text-black">
            <p>Order Total</p>
            <p>Rs. 23000</p>
          </div>
        </div>
        <div className="relative py-4 mt-2">
          <button className="p-2 absolute right-0 bg-brclr-600 rounded text-white">
            Continue to Payment
          </button>
        </div>
      </div>
    </section>
  ) : (
    <div className="w-full h-full flex items-center justify-center py-10">
      <p className="text-center text-lg text-nclr-700">The Cart is Empty</p>
    </div>
  );
};

export default Cart;
