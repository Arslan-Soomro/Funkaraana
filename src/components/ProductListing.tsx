const ProductListing = () => {
  return (
    <section className="w-full h-full lg:flex flex-row justify-center py-2 px-2">
      {/*Image Part */}
      <div className="w-full max-h-[500px] lg:w-2/5 rounded">
        <img
          src="images/flowers.jpg"
          className="object-contain rouded w-full max-h-[500px]"
        />
      </div>
      {/*Text Part */}
      <div className="flex-1 p-2 lg:text-left text-center">
        <div className="mb-2">
          <h2 className="font-bold text-xl xs:text-2xl text-sbrclr-600">Flowers of Death</h2>
          <p className="text-sm text-brclr-600">By Kamal Ahmed</p>
        </div>
        <div className="pr-5 mb-5 text-sm xs:text-base text-nclr-800">
          <p>
            They needed to find a place to eat. The kids were beginning to get
            grumpy in the back seat and if they didn't find them food soon, it
            was just a matter of time before they were faced with a complete
            meltdown. Even knowing this, the solution wasn't easy. Everyone in
            the car had a different opinion on where the best place to eat would
            be with nobody agreeing with the suggestions of the others. It
            seemed to be an impossible no-win situation where not everyone would
            be happy no matter where they decided to eat which in itself would
            lead to a meltdown. Yet a decision needed to be made and it needed
            to be made quickly.
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl font-bold text-brclr-600">Rs. 29k</p>
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
