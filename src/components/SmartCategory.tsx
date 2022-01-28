import Categories from "./Categories"
import CollectionList from "./CollectionList";
import { categoryData } from "../utils/dummyData";
import { useEffect } from "react";

const SmartCategory = () => {

    useEffect(() => {
        
    })

    return(
        <Categories title={categoryData.title} categories={categoryData.categories} filters={categoryData.filters} menu={categoryData.menu} ><CollectionList /></Categories>
    )
}

export default SmartCategory;