
import { useParams } from "react-router-dom"
import axios from "axios"
import { useQuery } from "react-query"
import { useContext } from "react"
import { cartContext } from "../../Context/CartContext"
import toast from "react-hot-toast"

const ProductDetails = () => {

  const { addProductToCart } = useContext(cartContext)


  const { id } = useParams()

  async function getspcialproduct() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  }

  async function addProduct() {
    const data = await addProductToCart(id)
    console.log(data)
    if (data) {
      toast.success(data.message)
    }else{toast.error(data.message)}
  }



  const { isLoding, data } = useQuery(`product${id}`, getspcialproduct)







  return (
    <div>
      <div className="  md:flex ">
        <div className="img-details flex items-center md:w-1/3 ">
          <img src={data?.data.data.imageCover} alt="" className="w-full" />
        </div>

        <div className="flex justify-center items-center w-2/3">
        <div className="details m-5  ">
          <p className="m-2">{data?.data.data.title} </p>
          <p className="m-2">{data?.data.data.description}  </p>
          <p className="m-2">{data?.data.data.category.name} </p>
          <div className="flex justify-between ">
            <p className="m-2">{data?.data.data.price} Egp</p>
            <p className="m-2">{data?.data.data.ratingsAverage}</p>
          </div>
          <button onClick={addProduct} type="submit" className=" text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600 my-4">
            Add
          </button>

        </div>
        </div>
        



      </div>



    </div>
  )
}

export default ProductDetails

