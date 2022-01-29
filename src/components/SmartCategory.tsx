import Categories from "./Categories"
import CollectionList from "./CollectionList";
import { categoryData } from "../utils/dummyData";
import { useEffect, useState } from "react";
import { apiUrl } from "../utils/globals";
import { ProductDataType } from "../utils/customTypes";

const SmartCategory = () => {

    const [prods, setProds] = useState<ProductDataType[] | null>(null);

    useEffect(() => {
        (async () => {
            const url = `${apiUrl}/product/all`;
            const res = await fetch(url);
            const resData = await res.json();
            setProds(resData.data);
        })();
    }, [])

    return(
        <Categories title={categoryData.title} categories={categoryData.categories} filters={categoryData.filters} menu={categoryData.menu} ><CollectionList products={prods} /></Categories>
    )
}

export default SmartCategory;