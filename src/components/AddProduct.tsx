import { useRef, useState } from "react";

const AddProduct = ({addClickHandler}: {addClickHandler: ({name, price, image, description}: {name: string, price: number, image: File, description: string}) => void}) => {

  const [imageFile, setImageFile] = useState<File | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const clickHandler = () => {
    if(nameRef.current?.value && priceRef.current?.value && imageFile && descRef.current?.value){
      addClickHandler({
        name: nameRef.current.value,
        price: parseFloat(priceRef.current.value),
        image: imageFile,
        description: descRef.current.value,
      });

      //Clear All Fields
      nameRef.current.value = "";
      priceRef.current.value = "";
      setImageFile(null);
      descRef.current.value = "";
    }else{
      console.log("Fill All Fields to Add the Product");
    }
  }

  return(
    <section className="p-4 h-full flex flex-col">
      <div className=" text-brclr-600 text-xl font-bold bg-white p-3 rounded-lg shadow-md shadow-neutral-100">
        Add Proudct
      </div>
      <div className="flex mt-2 justify-center items-center w-full flex-auto">
        <form className="p-0 xs:p-6 text-xs xs:text-sm md:text-base">
          <div className="mb-8">
            <label className="ml-1 mb-1 text-sbrclr-500">Product Name</label>
            <input type="text" ref={nameRef} placeholder="Product Name" className="px-5 py-3 shadow-sm focus:border-2 border-sbrclr-400 rounded-lg w-full text-sm xs:text-base" />
          </div>

          <div className="mb-8">
            <label className="ml-1 mb-1 text-sbrclr-500 ">Product Price</label>
            <input type="number" ref={priceRef} min="1" placeholder="PKR" className="px-5 py-3 shadow-sm focus:border-2 border-sbrclr-400 rounded-lg w-full text-sm xs:text-base" />
          </div>

          <div className="mb-8">
            <label className="ml-1 mb-1 text-sbrclr-500 ">Product Description</label>
            <textarea placeholder="Product Description" ref={descRef} className="px-5 py-3 shadow-sm focus:border-2 border-sbrclr-400 rounded-lg w-full text-sm xs:text-base focus-within:outline-none resize-none" ></textarea>
          </div>

          <div className="mb-8">
            <label htmlFor="prod-up-img" className="ml-1 mb-1 py-1 px-3 rounded-lg bg-sbrclr-600 hover:bg-sbrclr-700 active:bg-sbrclr-800 text-white shadow cursor-pointer">Upload Image</label>
            <input id="prod-up-img" type="file" onChange={(e) => {e.target?.files ? setImageFile(e.target.files[0]) : setImageFile(null)}} placeholder="PKR" className="hidden px-5 py-3 rounded-lg w-full text-sm xs:text-base" />
          </div>

          <button onClick={e => {
            e.preventDefault();
            clickHandler();
          }} className=" text-white bg-sbrclr-600 hover:bg-sbrclr-700 active:bg-sbrclr-800 p-3 w-full rounded-lg shadow-xl shadow-sbrclr-200">Save Product</button>
        </form>
      </div>
    </section>
  )
}

export default AddProduct;
