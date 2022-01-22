const AddProduct = () => {
  return(
    <section>
      
    </section>
  )
}

/*
const AddProduct = () => {
  return (
    <section className="">
      <div className="p-2 text-xl border-b border-nclr-200">
        <h2>Add Product</h2>
      </div>

      <form className="flex flex-col items-center py-8 px-4 gap-8 w-80 mx-auto my-0">
        <div>
          <label className="block ml-1 text-sm">Product Name</label>
          <input
            placeholder="Product Name"
            className="w-full border border-nclr-200 p-2 rounded-lg focus:border-2 focus:border-brclr-600"
          />
        </div>

        <div className="">
          <label className="block ml-1 text-sm">Product Price</label>
          <input placeholder="PKR" type="number" min="1" className="w-full border border-nclr-200 p-2 rounded-lg focus:border-2 focus:border-brclr-600" />
        </div>

        <div>
            <label className="block ml-1 text-sm">
                Product Description
            </label>
            <textarea className="resize-none border w-full border-nclr-200 rounded-lg p-2 focus-within:outline-none"> </textarea>
        </div>

        <div className="">
          <label htmlFor="image-upload" className="block border border-nclr-300 text-base hover:bg-nclr-200 active:bg-nclr-300 px-2 py-1 rounded cursor-pointer" >Upload Product Image</label>
          <input placeholder="PKR" id="image-upload" name="image-upload" type="file" className="hidden" />
        </div>

      </form>
    </section>
  );
};
*/
export default AddProduct;
