import axios from "axios"
import { useQuery } from "react-query"

export default function Category() {


  async function getCategory() {

    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories")

  }

  const { data } = useQuery("category", getCategory)





  return (
    <div className='category-card w-[90%] m-auto flex flex-wrap justify-center items-center '>
      {data?.data.data.map((category, idx) => (
        <>
          <div key={idx} className=" inner m-3 border-slate-200 border-2 w-full md:w-[45%] lg:w-[30%] h-[500px] ">

            <div className="h-[400px] overflow-hidden"> <img src={category.image} alt="" className="w-full   mb-2" /></div>

            <h1 className="m-5 text-center text-green-600 font-semibold text-4xl">{category.name}</h1>

          </div>

        </>
      )

      )}
    </div>
  )
}
