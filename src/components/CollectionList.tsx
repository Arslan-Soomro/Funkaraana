import { ProductDataType } from "../utils/customTypes";
import ProductCard from "./ProductCard";

//We assume this data is fetched through some api
const products: ProductDataType[] = [
    {
      name: "Flowers of Death",
      seller: "Kamal",
      price: 29,
      image: "images/flowers.jpg",
      description: "They needed to find a place to eat. The kids were beginning to get grumpy in the back seat and if they didn't find them food soon, it was just a matter of time before they were faced with a complete meltdown. Even knowing this, the solution wasn't easy. Everyone in the car had a different opinion on where the best place to eat would be with nobody agreeing with the suggestions of the others. It seemed to be an impossible no-win situation where not everyone would be happy no matter where they decided to eat which in itself would lead to a meltdown. Yet a decision needed to be made and it needed to be made quickly."
    },
  
    {
      name: "The Girl",
      seller: "Adil",
      price: 19,
      image: "images/girl.jpg",
      description: "Patrick didn't want to go. The fact that she was insisting they must go made him want to go even less. He had no desire to make small talk with strangers he would never again see just to be polite. But she insisted that Patrick go, and she would soon find out that this would be the biggest mistake she could make in their relationship."
    },
  
    {
      name: "The Head",
      seller: "Kaleem",
      price: 10,
      image: "images/head.jpg",
      description: "He heard the loud impact before he ever saw the result. It had been so loud that it had actually made him jump back in his seat. As soon as he recovered from the surprise, he saw the crack in the windshield. It seemed to be an analogy of the current condition of his life."
    },
  
    {
      name: "Fallen Rocks",
      seller: "Sajid",
      price: 20,
      image: "images/rocks.jpg",
      description: "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
    },  
  
    {
      name: "Ships of Dhaka",
      seller: "Sajid",
      price: 15,
      image: "images/ship.jpg",
      description: "It was going to rain. The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the weatherman. It was going to rain, so he better get outside and prepare.",
    },  
  
    {
      name: "Red Handed",
      seller: "Majid",
      price: 11,
      image: "images/hands.jpg",
      description: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want."
    }, 
  
    {
      name: "Empty Handed",
      seller: "Latif",
      price: 4,
      image: "images/hands1.jpg",
      description: "I've rented a car in Las Vegas and have reserved a hotel in Twentynine Palms which is just north of Joshua Tree. We'll drive from Las Vegas through Mojave National Preserve and possibly do a short hike on our way down. Then spend all day on Monday at Joshua Tree. We can decide the next morning if we want to do more in Joshua Tree or Mojave before we head back.",
    }, 
  
    {
      name: "The Kinf",
      seller: "Latif",
      price: 30,
      image: "images/head1.jpg",
      description: "Although Scott said it didn't matter to him, he knew deep inside that it did. They had been friends as long as he could remember and not once had he had to protest that something Joe apologized for doing didn't really matter. Scott stuck to his lie and insisted again and again that everything was fine as Joe continued to apologize. Scott already knew that despite his words accepting the apologies that their friendship would never be the same."
    }, 
  
    {
      name: "The Doomed",
      seller: "Latifa",
      price: 32,
      image: "images/head2.jpg",
      description: "It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system. The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed, but it does mean that if you're willing to open your mind a bit you don't have to be stuck in an office from 9 to 5 for the next fifty years o your life."
    }, 
  
    {
      name: "The Blessed",
      seller: "Umer",
      price: 34,
      image: "images/head3.jpg",
      description: "There had to be a better way. That's all Nancy could think as she sat at her desk staring at her computer screen. She'd already spent five years of her life in this little cubicle staring at her computer doing work that didn't seem to matter to anyone including her own boss. There had to be more to her life than this and there had to be a better way to make a living. That's what she was thinking when the earthquake struck.",
    }, 
  ]


//TODO let product data be passed as a prop
const CollectionList = () => {
  return (
    <div className="res-grid w-full p-2 overflow-y-auto">
      {products.map((val, ind) => (
        <ProductCard
          name={val.name}
          price={val.price}
          seller={val.seller}
          image={val.image}
          description={val.description}
          key={ind}
        />
      ))}
    </div>
  );
};

export default CollectionList;
