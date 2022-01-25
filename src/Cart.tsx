import { products } from "./utils/dummyData";
import CartCard from "./components/CartCard";

const Cart = () => {
    return(
        <section className="w-full h-full py-2 px-2">
            {products.map((prod, i) => 
                <CartCard key={i} id={prod.id} name={prod.name} seller={prod.seller}  price={prod.price} />
            )}
        </section>
    )
}

export default Cart;