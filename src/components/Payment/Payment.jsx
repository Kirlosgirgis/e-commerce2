import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
import axios from 'axios'







const Payment = () => {


    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [details, setDetails] = useState("")

    const { CardId } = useContext(cartContext)

    async function cashPayment() {
        const cashValue = {
            shippingAddress: {
                details,
                phone,
                city,
            }
        }
        try {

            const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${CardId}`,
                cashValue,
                {
                    headers: {
                        token: localStorage.getItem("tkn"),
                    }
                }
            )
            console.log(data);


        } catch (error) {
            console.log(error);

        }

    }


    async function OnlinePayment() {
        const cashValue = {
            shippingAddress: {
                details,
                phone,
                city,
            }
        }
        try {

            const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CardId}?url=http://localhost:5173/`,
                cashValue,
                {
                    headers: {
                        token: localStorage.getItem("tkn"),
                    }
                }
            )
            window.open(data.session.url)
            console.log(data);


        } catch (error) {
            console.log(error);

        }

    }


    return (
        <div className='p-5 md:w-[70%] mx-auto'>
            <h1 className='text-center font-semibold text-4xl text-green-600 p-5'>Payment</h1>

            <div className="mb-6">
                <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details : </label>
                <input
                    onChange={(e) => setCity(e.target.value)}
                    type="text" id="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" />

            </div>

            <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone :</label>
                <input
                    onChange={(e) => setPhone(e.target.value)}

                    type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" />

            </div>

            <div className="mb-6">
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City :</label>
                <input
                    onChange={(e) => setDetails(e.target.value)}

                    type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" />

            </div>
            <div className='flex '>
                <div className='p-5'>
                    <button onClick={cashPayment} className='text-sm p-2 bg-green-600 text-white rounded'> <Link > Cash Payment</Link></button>
                </div>
                <div className='p-5'>
                    <button onClick={OnlinePayment} className='text-sm p-2 bg-green-600 text-white rounded'> <Link > Online Payment</Link></button>
                </div>
            </div>


        </div>
    )
}

export default Payment
