import axios from "axios";

export const getAllProductService = ()=>{
   return axios.get("https://dummyjson.com/products ")
}

export const getProductCategories=()=>{
   return axios.get("https://dummyjson.com/products/categories")
}

export const getSingleCategories=(category)=>{
   return axios.get(`https://dummyjson.com/products/category/${category}`)
}
