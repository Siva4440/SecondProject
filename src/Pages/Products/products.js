import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Product from "../../components/product";
import {getAllProductService ,getProductCategories, getSingleCategories} from "../../Services/productService";
import { Grid } from "@mui/material";


const Products = () => {
  const [productList, setProductList]= useState([]);
  const [categories , setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(()=>{
    getAllProductService()
    .then(res=>{
      //console.log(res.data.products)
      setProductList(res.data.products)
    })
  },[])

  useEffect(()=>{
    getProductCategories()
    .then(res=>{
      setCategories(res.data)
    })
  },[])

  useEffect(()=>{
    if(selectedCategory){
      getSingleCategories(selectedCategory).then(res =>{
        setProductList(res.data.products)
      })
    }
  },[selectedCategory])
  // console.log("selected ", selectedCategory)

  return (
    <div>
      <div>
      <Header/>
      </div>
      <div className="categories"  style={{margin:'10px'}}>
        <Grid item xs={12}>
          {categories.map((item,index)=>{
            return(
              <Grid item xs={2} key={index} style={{display:'inline-block', margin:'5px', backgroundColor:'grey', color:'white' ,padding:'5px', cursor:'pointer' }}>
              <span onClick={()=> setSelectedCategory(item)}>{item}</span>
              </Grid>
            )
          })}
        </Grid>
      </div>
      
     <div style={{padding:'20px'}}>
      <Grid container>
        {productList.map((item,index)=>{
          return(
            <Grid item xs={3} key={index}>
              <Product  prod={item}  />
            </Grid>
          )
        })}
      </Grid>
     </div>
    </div>
  );
};
export default Products;
