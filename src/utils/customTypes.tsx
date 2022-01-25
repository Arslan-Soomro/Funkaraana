export interface ProductDataType{
    name: string,
    seller: string,
    price: number,
    image: string,
    description: string,
    halfCard?: boolean,
}

export interface CategoryElementProps{
    children?: any,
    title: string, //Title of the Category
    categories: {name: string}[],
    filters: {
        title: string,
        subFilters: {name: string}[]
    }[],
    menu:{
        title: string,
        options: { name: string }[]
    }
}