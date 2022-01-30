import {React,useEffect} from 'react';
import { useParams } from  "react-router-dom"
import axios from 'axios'; 
import { useDispatch,useSelector } from 'react-redux';
import {selectedProducts,removeSelectedProducts} from "../containers/redux/actions/productAction"
const ProductDetail = () => {
  
  // const { productId } = useParams();
  const productId=useParams().productid;
const dispatch = useDispatch();
// console.log(productId);
  const product = useSelector((state)=> state.product);
// console.log(product)
const {image, title,price,category,description} = product;
  const fetchProductDetails= async ()=>{
 
  const res = await axios.get(`https://fakestoreapi.com/products/${productId}`) 
  .catch((err)=>{
    console.log(err)

  })

 
dispatch(selectedProducts(res.data));

}
useEffect(()=>{
  if(productId && productId !=="" ){
    fetchProductDetails();
  }
return ()=>{
  dispatch(removeSelectedProducts())
}


},[productId])
  
  return( <>
  <div style={{marginTop:"100px"}}>
  <div className="ui grid container">
  {
    Object.keys(product).length ===0 ?(
<div>...Product is loading</div>
    ):(
<div className="ui placeholder segment">
<div className="ui two columns stackable center aligned grid">
<div className="middle aligned row">
  <div className="column lp">
  <img className="ui fluid image" src={image}/>

  </div>
  <div className="column rp">
<h1>{title}</h1>
<h2>
  <a className="ui teal tag label">${price}</a>
</h2>
<h3 className="ui brown black header">{category}</h3>
  <div className ="ui vertical animated button" tabIndex="0">
    <div className="hidden content">
      <i className="shop icon"></i>
    </div>
  </div>
  <div className="visible content">Add to Cart</div>
  
  </div>
</div>
</div> 
</div>
    )
  } 
  
  
  </div>
      </div>
  </>)
};
export {ProductDetail}