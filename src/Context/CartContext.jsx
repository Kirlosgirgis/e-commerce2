import axios from 'axios';
import { createContext, useEffect, useState } from 'react'



export const cartContext = createContext();

export const CartContext = ({ children }) => {

    const [numOfItems, setnumOfItems] = useState(0)
    const [AllPrice, setAllPrice] = useState(0)
    const [CardId, setCardId] = useState("")
    const [Products, setProducts] = useState([])

    async function addProductToCart(ProductId) {

        try {
            const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart",
                {
                    "productId": ProductId

                },
                {
                    headers: {
                        token:localStorage.getItem("tkn"),
                    },
                }
            );
            console.log(data,"zew");
            
            getUserCart()
            return data ;


        } catch (error) {
            console.log(error)
        }

    }

    async function getUserCart() {
        try {
          const {data}   = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{headers:{
            token: localStorage.getItem("tkn")
          }});
         
          console.log(data);
          setnumOfItems(data.numOfCartItems)
          setAllPrice(data.data.totalCartPrice)
          setProducts(data.data.products)
          setCardId(data.data._id)
          console.log(CardId);
          
          
          return  data

        } catch (error) {
            console.log(error);
            
        }
    }
    async function UpdateCount(id , count) {
        try {
          const {data}   = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
            ,  {count: count} 
            ,{headers:{
            token: localStorage.getItem("tkn")
          }});
         
          console.log(data);
          setnumOfItems(data.numOfCartItems)
          setAllPrice(data.data.totalCartPrice)
          setProducts(data.data.products)
          setCardId(data.data._id)

          
          return  data

        } catch (error) {
            console.log(error);
            
        }
    }
    async function DeleteProduct(id ) {
        try {
          const {data}   = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
            ,{headers:{
            token: localStorage.getItem("tkn")
          }});
         
          console.log(data);
          setnumOfItems(data.numOfCartItems)
          setAllPrice(data.data.totalCartPrice)
          setProducts(data.data.products)
          setCardId(data.data._id)

          
          return  data

        } catch (error) {
            console.log(error);
            
        }
    }
    async function ClearCart() {
        try {
          const {data}   = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{headers:{
            token: localStorage.getItem("tkn")
          }});
         
          console.log(data);
          setnumOfItems(0)
          setAllPrice(0)
          setProducts([])
          
          return  data

        } catch (error) {
            console.log(error);
            
        }
    }

    

    useEffect(function () {
        getUserCart()
    },[])

    return <cartContext.Provider
     value={{ addProductToCart, Products, AllPrice , numOfItems ,UpdateCount , DeleteProduct , ClearCart , CardId}} >{children}</cartContext.Provider>


}

export default CartContext
