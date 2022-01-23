const AddProduct = () => {
  return(
    <section className="p-4 h-full flex flex-col">
      <div className=" text-brclr-600 text-xl font-bold">
        Add Proudct
      </div>
      <div className="flex mt-2 justify-center items-center w-full flex-auto">
        <form className="p-0 xs:p-6 text-xs xs:text-sm md:text-base">
          <div className="mb-8">
            <label className="ml-1 mb-1 text-sbrclr-500">Product Name</label>
            <input type="text" placeholder="Product Name" className="px-5 py-3 shadow-sm focus:border-2 border-sbrclr-400 rounded-lg w-full text-sm xs:text-base" />
          </div>

          <div className="mb-8">
            <label className="ml-1 mb-1 text-sbrclr-500 ">Product Price</label>
            <input type="number" min="1" placeholder="PKR" className="px-5 py-3 shadow-sm focus:border-2 border-sbrclr-400 rounded-lg w-full text-sm xs:text-base" />
          </div>

          <div className="mb-8">
            <label className="ml-1 mb-1 text-sbrclr-500 ">Product Description</label>
            <textarea placeholder="Product Description" className="px-5 py-3 shadow-sm focus:border-2 border-sbrclr-400 rounded-lg w-full text-sm xs:text-base focus-within:outline-none resize-none" ></textarea>
          </div>

          <div className="mb-8">
            <label htmlFor="prod-up-img" className="ml-1 mb-1 py-1 px-3 rounded-lg bg-sbrclr-600 hover:bg-sbrclr-700 active:bg-sbrclr-800 text-white shadow cursor-pointer border">Upload Image</label>
            <input id="prod-up-img" type="file" placeholder="PKR" className="hidden px-5 py-3 rounded-lg w-full text-sm xs:text-base" />
          </div>

          <button onClick={e => e.preventDefault()} className="border text-white bg-sbrclr-600 hover:bg-sbrclr-700 active:bg-sbrclr-800 p-3 w-full rounded-lg shadow-xl shadow-sbrclr-200">Save Product</button>
        </form>
      </div>
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
