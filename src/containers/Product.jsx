import {React,useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {ProductComponent} from './ProductComponent';
import axios from "axios";
import { setProducts } from './redux/actions/productAction';



export const Product = () => {
const products = useSelector((state)=>state)//afte dispatch the data we getting the data ffrom use selector

const dispatch = useDispatch();
const fetchProducts= async ()=>{
const res = await axios.get("https://fakestoreapi.com/products")
.catch((err)=>{
    console.log(err)
})
console.log(res.data)
dispatch(setProducts(res.data));//dispatch the data into action
}
useEffect(()=>{
    fetchProducts();
},[])

// console.log(products)

    return (
    <>
    <h3 style={{marginTop:"100px"}}>ProductComponet</h3>
        <div className="ui grid container">
            <ProductComponent />
        </div>
           </>
           
           )
};
