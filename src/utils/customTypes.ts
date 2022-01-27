export interface ProductDataType{
    id: number,
    name: string,
    seller: string,
    price: number,
    image: string,
    description: string,
    halfCard?: boolean,
    qty?: number,
}

export interface userData{
    id?: number,
    name?: string,
    username?: string,
    email?: string,
    password?: string,
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