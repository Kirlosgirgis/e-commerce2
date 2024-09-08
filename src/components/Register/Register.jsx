import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Register() {

const [isloading, setIsloading] = useState(false);
const  navigate = useNavigate();

  const user = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  }
  async function registeruser(values) {
    console.log(values);
    setIsloading(true)
   try {
    const responce = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values )
    console.log(responce);
    setIsloading(false)
    navigate("/login")

   }  

   
   catch (error) {
    console.log(error.response.data.message);
    toast.error(error.response.data.message)
    
   }
   setIsloading(false)

    


  }

  const validation = Yup.object().shape(
    {
      name: Yup.string().required().max(15).min(3),
      email: Yup.string().email().required(),
      password: Yup.string().required().matches(/^[A-Z][a-z0-9]{3,10}$/),
      rePassword: Yup.string().required().oneOf([Yup.ref("password")]),
      phone: Yup.string().required().matches(/^01[0125][0-9]{8}$/),
    }
  )

  const registerformik = useFormik({
    initialValues: user,
    onSubmit: registeruser,
    validationSchema: validation,

  });


  return (
    <div>
      <h1 className='text-center text-4xl py-5 font-bold text-green-700'> Registeration Form</h1>

      <form onSubmit={registerformik.handleSubmit} className='py-5 px-5 lg:w-1/2 mx-auto'>

        {/* input name */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-green-400 dark:border-green-400 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder=""
            value={registerformik.values.name}
            onChange={registerformik.handleChange}
            onBlur={registerformik.handleBlur} />
        </div>


        {/* error name */}
        {registerformik.errors.name && registerformik.touched.name ? (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 my-4" role="alert">
            <span className="font-medium">*</span> {registerformik.errors.name}
          </div>
        ) : ("")}



        {/*phone input  */}
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
          <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder=""
            value={registerformik.values.phone}
            onChange={registerformik.handleChange}
            onBlur={registerformik.handleBlur} />

        </div>

        {/* error phone */}

        {registerformik.errors.phone && registerformik.touched.phone ? (<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 my-4" role="alert">
          <span className="font-medium">*</span> {registerformik.errors.phone}
        </div>) : ("")}


        {/* email input */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder=""
            value={registerformik.values.email}
            onChange={registerformik.handleChange}
            onBlur={registerformik.handleBlur} />

        </div>

        {/* error mail */}

        {registerformik.errors.email && registerformik.touched.email ? (<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 my-4" role="alert">
          <span className="font-medium">*</span> {registerformik.errors.email}
        </div>) : ("")}



        {/* pass input */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder=""
            value={registerformik.values.password}
            onChange={registerformik.handleChange}
            onBlur={registerformik.handleBlur} />
        </div>

        {/* error pass */}
        {registerformik.errors.password && registerformik.touched.password ? (<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 my-4" role="alert">
          <span className="font-medium">*</span> {registerformik.errors.password}
        </div>) : ("")}


        {/* repass input */}
        <div className="mb-6">
          <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">rePassword</label>
          <input type="password" id="rePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder=""
            value={registerformik.values.rePassword}
            onChange={registerformik.handleChange}
            onBlur={registerformik.handleBlur} />

        </div>

        {/* error repass */}
        {registerformik.errors.rePassword && registerformik.touched.rePasswordpassword ? (<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 my-4" role="alert">
          <span className="font-medium">*</span> {registerformik.errors.rePassword}
        </div>) : ("")}

        {/* btn register */}

        <button type="submit" className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600">
          
          {isloading == true ? <i className ="fa-solid fa-spinner fa-spin text-white" > </i>  : ("Register") }
          </button>
      </form>


    </div>
  )
}
