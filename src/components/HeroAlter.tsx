import ProductCard from "./ProductCard";
import TypeWriter from "./TypeWriter";

//TODO Adapt this to fit right, Add a picture background maybe
const HeroAlter = () => {
  return (
    <section className="w-full h-full flex justify-evenly relative items-center flex-col text-pr text-center py-5 px-5">
      <div className="z-10">
        <div>
          <p className="text-sbrclr-600 text-xs xs:text-base">Funkaraana</p>
          <h1 className="font-black text-xl xs:text-4xl">
            A{" "}
            <TypeWriter
              words={["Market", "Hub", "Place"]}
              styleClasses="text-sbrclr-600"
            />{" "}
            for Quality Art
          </h1>
        </div>
        <p className="max-w-[400px] mt-4 my-0 mx-auto text-xs xs:text-base">
          Buy and sell Art, we put extra effort to make sure only authetic
          pieces of art reach you and an artist doesn't have to worry about the
          technicalities of selling his/her art
        </p>
      </div>
      <div className="relative w-full flex justify-center items-center flex-col mt-10">
      <p className="font-black text-2xl xs:mt-0 xs:text-5xl text-center -top-10  tracking-widest text-nclr-200 z-0">
        Art Of Day
      </p>
        <ProductCard
          name=""
          seller=""
          image="images/flowers.jpg"
          description=""
          price={10}
          halfCard={true}
        />
      </div>
      
    </section>
  );
};

export default HeroAlter;