import { useContext } from 'react'

import React from 'react'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'




const Cart = () => {
    const { Products, AllPrice, UpdateCount, ClearCart, DeleteProduct , CardId } = useContext(cartContext)
    console.log(Products, AllPrice, CardId , "cart");

    return <>
        <section className='p-5 bg-slate-100 '>
            <div className="flex justify-between items-center p-5">
                <div className="head pb-5">
                    <h3 className='font-semibold text-xl mb-4'>Shop Cart:</h3>
                    <div className='border-2 border-zinc-300 w-fit'><p className='text-green-500 text-lg p-2 '>TotalPrice:{AllPrice}</p></div>
                </div>
                <div className="clear">
                    <button onClick={() => ClearCart()} className='text-sm p-2 bg-red-600 text-white rounded'> Clear Cart</button>

                </div>
            </div>

            {Products?.map((Product) => (
                <>
                    <div className='flex justify-center '>
                        <div className="OneItem flex items-center w-full box-border m-5 border-b-2 border-green-400 ">
                            <div className="img w-1/6 me-8 mb-5 ">
                                <img src={Product.product.imageCover} className='w-full' alt="" />
                            </div>
                            <div className="details w-3/6">
                                <p className='p-2'>{Product.product.title.split(" ").slice(0, 2).join(" ")}</p>
                                <p className='p-2'>Price:{Product.price} Egp</p>
                                <button onClick={() => DeleteProduct(Product.product.id)} className='text-sm p-2 bg-red-600 text-white rounded m-5'> <i className='fa-solid fa-trash text-white pe-2'></i>Remove</button>
                            </div>
                            <div className="count flex items-center ">
                                <button onClick={() => UpdateCount(Product.product.id, Product.count + 1)} type="submit" className="m-2 text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full    text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600 p-2">
                                    +
                                </button>

                                <p>{Product.count}</p>
                                <button onClick={() => UpdateCount(Product.product.id, Product.count - 1)} type="submit" className="m-2 text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full    text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600 p-2">
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ))}
           <div className='p-5'>
           <button className='text-sm p-2 bg-green-600 text-white rounded'> <Link to={"/payment"}> Payment</Link></button>
           </div> 




        </section>









    </>

}

export default Cart
