import { useQuery } from "react-query";
import axios from "axios";
export default function Brand() {

  async function getBrand() {

    return await axios.get("https://ecommerce.routemisr.com/api/v1/brands")

  }

  const {data} = useQuery("Brand", getBrand)
 console.log(data);
 


  return (
    <div className='brand-card w-[90%] m-auto flex flex-wrap justify-center items-center'>
    {data?.data.data.map((brand, idx) => (
      <>
        <div key={idx} className=" inner m-3 border-slate-200 border-2 w-full sm:w-[45%] md:w-[22%] md:h-[300px]  ">
          
           <div className="h-[200px] overflow-hidden"> <img src={brand.image} alt="" className="w-full   mb-2" /></div>
          
          <h1 className="m-5 text-center text-green-600 font-semibold text-4xl">{brand.name}</h1>

        </div>

      </>
    )

    )}
  </div>
  )
}
