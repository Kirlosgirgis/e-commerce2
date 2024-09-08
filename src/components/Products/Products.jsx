import axios from "axios"
import { useContext , useState} from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { cartContext } from "../../Context/CartContext"
import toast from "react-hot-toast"






const Products = () => {


 
  const{addProductToCart} =useContext(cartContext)
  async function addProduct(id) {
    const data = await addProductToCart(id)
    console.log(data)
    if (data) {
      toast.success(data.message)
    }else{toast.error(data.message)}
  }


  async function getproducts() {
   
    return  await axios.get("https://ecommerce.routemisr.com/api/v1/products")

  }


  const { data } = useQuery("products", getproducts,
    {
      refetchOnMount: false
    }
  )
  console.log(data);

  return <>

    <section>
      <div className="card m-5 flex flex-wrap   ">
        {data?.data.data.map((product, idx) => (<>
          <div key={idx} className="inner   p-4 bg-slate-100 md:w-1/2 lg:w-1/4 mx-auto">
          <Link to={`/productDetails/${product.id}`}>

            <div>
              <img src={product.imageCover} alt="kkkk" className="w-full" />
              <h5 className="py-4 text-green-600">{product.category.name}</h5>
              <h5>{product.title.split(" ").slice(0, 2).join(" ")}</h5>
              <div className="flex justify-between align-middle  py-2">
                <h5 >{product.id} Egp</h5>
                
                <h5 >{product.ratingsAverage}<i className="fa-solid fa-star text-yellow-400 mx-2"></i></h5>

              </div>
            </div>
            </Link>
            <button onClick={()=>addProduct(product.id)}  type="submit" className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600 my-4">
              Add
            </button>
          </div>
        </>))}
      </div >


    </section>
  </>






}
export default Products

