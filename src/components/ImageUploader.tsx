import { useRef, useState } from "react";
import { apiUrl } from "../utils/globals";

const ImageUploader = () => {

  const nameRef = useRef<HTMLInputElement>(null);
  const [imageVal, setImageVal] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const clickHandler = async () => {
    if(nameRef.current?.value != undefined && imageVal != null){
       
        const formData = new FormData();
        formData.append('image', imageVal);
        
        formData.append('name', nameRef.current.value);
        


        if(formRef.current){
        const res = await fetch(`${apiUrl}/image`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept' : 'multipart/form-data'
            },
            //credentials: 'include'
        });}
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          clickHandler();
        }}
        className="flex flex-col gap-4"
        ref={formRef}
      >
        <input placeholder="filename" ref={nameRef} />
        <input
          type="file"
          onChange={(e) => {e.target.files ? setImageVal(e.target.files[0]) : setImageVal(null)}}
        />
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUploader;
