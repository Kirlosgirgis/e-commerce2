import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assets/images/freshcart-logo.svg"
import { authcontext } from '../../Context/AuthContext'
import { cartContext } from '../../Context/CartContext'


export default function Nav() {
   

    const { token, setToken } = useContext(authcontext)
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("tkn");
        setToken(null);
        navigate("/login");
    }
    const { numOfItems } = useContext(cartContext)
   
  function NavClick() {
   const navlinks = document.querySelector(".NavMenu")
   navlinks.classList.remove('hidden')
  }
    return (


        <nav class="bg-white border-gray-200 dark:bg-gray-900  w-full ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="logo  ">
                <img src={logo} alt="" className='text-center m-auto' />
            </div>
                <button onClick={NavClick}   data-collapse-toggle="navbar-default" type="button" className="NavButton  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class=" NavMenu hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {token ? <>
                            <li className='mt-4 lg:mx-4'>
                                <NavLink to={"/home"}>Home</NavLink>
                            </li>
                            <li className='mt-4 lg:mx-4 '>
                                <NavLink to={"/cart"} className={"relative"}>cart
                                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">{numOfItems}</div>
                                </NavLink>

                            </li>
                            <li className='mt-4 lg:mx-4 '>
                                <NavLink to={"/products"}>Products</NavLink>
                            </li>
                            <li className='mt-4 lg:mx-4 '>
                                <NavLink to={"/category"}>Category</NavLink>
                            </li>
                            <li className='mt-4 lg:mx-4 '>
                                <NavLink to={"/brand"}>Brand</NavLink>
                            </li>
                        </> : ""}
                    </ul>
                   
                </div>
                <div className="auth text-center mt-4 lg:mx-2   hidden w-full md:block md:w-auto">
                        <ul className='flex justify-center'>
                            {token ? <>  <li className='mr-4'>
                                <button onClick={logout}>Logout</button>
                            </li> </>
                                : <> <li className='mr-4'>
                                    <NavLink to={"/login"}>Login</NavLink>
                                    </li>
                                    <li className='mr-4'>
                                        <NavLink to={"/register"}>Register</NavLink>
                                    </li></>}

                        </ul>
                    </div>
            </div>
        </nav>





    )
}
