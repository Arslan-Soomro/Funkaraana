import { useEffect, useState } from "react";
import { ProductDataType } from "../utils/customTypes";
import CartCard from "./CartCard";

const Cart = ({
  prods,
}: {
  prods?: ProductDataType[];
}) => {

  const [bill, setBill] = useState({subtotal: 0, shipping: 0, tax: 0, total: 0});

  //Percentage = (value/totalValue) * 100
  //Percentage / 100 = value / totalValue
  //value = (Percentage * totalValue)/100 


  useEffect(() => {
    //Caclulates payment

    let sub = 0; 
    if(prods != undefined){
      prods.forEach((prod, i) => {
        if(prod.qty != undefined){
          sub += prod.price * prod.qty;
        }else{
          sub += prod.price;
        }
      })
    };

    const shippingFee = sub > 0 ? 1000  : 0;
    const taxFee = (17 * sub) / 100; //Get 17% of subtotal;
    
    setBill({
      shipping: shippingFee,
      subtotal: sub,
      tax: taxFee,
      total: sub + shippingFee + taxFee,
    });

  }, [prods])

  return (prods != undefined && prods.length > 0) ? (
    <section className="w-full h-full py-2 px-2">
      
      {/*Products Section */}
      {prods.map((prod, i) => (
        <CartCard
          key={i}
          id={prod.id}
          name={prod.name}
          seller={prod.seller}
          price={prod.price}
          image={prod.image}
          description=""
          qty={prod.qty}
        />
      ))}

      {/*Billing Section */}
      <div className="my-5 w-full md:w-3/4 mx-auto text-sm xs:text-base">
        <div className="space-y-4 w-full p-5 bg-nclr-50 rounded">
          <div className="flex justify-between p-2 border-b text-nclr-600">
            <p>Subtotal</p>
            <p className="font-bold">Rs. {bill.subtotal}</p>
          </div>
          <div className="flex justify-between p-2 border-b text-nclr-600">
            <p>Shipping</p>
            <p className="font-bold">Rs. {bill.shipping}</p>
          </div>
          <div className="flex justify-between p-2 border-b text-nclr-600">
            <p>Tax</p>
            <p className="font-bold">Rs. {bill.tax}</p>
          </div>
          <div className="flex justify-between p-2 border-b font-bold text-black">
            <p>Order Total</p>
            <p>Rs. {bill.total}</p>
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
