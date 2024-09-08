
import { React } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Category from './components/Category/Category'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Products from './components/Products/Products'
import Brand from './components/Brand/Brand'
import { Toaster } from 'react-hot-toast'
import AuthContext from './Context/AuthContext'
import ProtectedRoot from './components/ProtectedRoot/ProtectedRoot'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './components/Home/Home'
import ProductDetails from './components/ProductDetails/ProductDetails'
import CartContext from './Context/CartContext'
import Cart from './components/Cart/Cart'
import Payment from './components/Payment/Payment'

export default function App() {


  const myrout = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [

        { path: "/", element: <ProtectedRoot><Home /></ProtectedRoot> },
        { path: "/home", element: <ProtectedRoot><Home /></ProtectedRoot> },

        { path: "/products", element: <ProtectedRoot><Products /></ProtectedRoot> },
        { path: "/productDetails/:id", element: <ProtectedRoot><ProductDetails /></ProtectedRoot> },
        { path: "/category", element: <ProtectedRoot><Category /></ProtectedRoot> },
        { path: "/brand", element: <ProtectedRoot><Brand /></ProtectedRoot> },
        { path: "/cart", element: <ProtectedRoot><Cart/></ProtectedRoot> },
        { path: "/payment", element: <ProtectedRoot><Payment/></ProtectedRoot> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },


      ]
    }
  ])

  const x = new QueryClient()

  return (
    <>
      <QueryClientProvider client={x}>
        <AuthContext>
          <CartContext>
            <Toaster />
            <RouterProvider router={myrout} />
          </CartContext>
        </AuthContext>
      </QueryClientProvider>


    </>
  )
}
