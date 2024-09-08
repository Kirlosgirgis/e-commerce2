
import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/slider-image-1.jpeg"
import img2 from "../../assets/images/slider-image-2.jpeg"
import img3 from "../../assets/images/slider-image-3.jpeg"
import img4 from "../../assets/images/banner-4.jpeg"
import { useQuery } from "react-query";
import axios from "axios";
import Products from "../Products/Products";
import { useState } from "react";





const Home = () => {

    const [isloading, setIsloading] = useState(false);


    function SimpleSlider() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
        };
        return (
            <section className="flex my-5">
                <Slider className="w-2/3 m-auto h-[320px] " {...settings}>
                    <div>
                        <img src={img1} alt="" className="w-[100%] h-[300px]" />
                    </div>
                    <div>
                        <img src={img2} alt="" className="w-[100%] h-[300px]" />
                    </div>
                    <div>
                        <img src={img3} alt="" className="w-[100%] h-[300px]" />
                    </div>

                </Slider>

                <div className="solid-image w-1/3">
                    <img src={img2} alt="" className="w-full h-[150px]" />
                    <img src={img4} alt="" className="w-full h-[150px]" />

                </div>
            </section>
        );
    }

    function CatSlider() {

        async function getCategory() {

            return await axios.get("https://ecommerce.routemisr.com/api/v1/categories")


        }



        const { data } = useQuery("category", getCategory)

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,

        };
        return (
            <Slider className="w-[90%] "{...settings}>



                {data?.data.data.map((category, idx) => (
                    <>
                        <div key={idx} className=" inner m-3 border-slate-200 border-2 w-[100%]  h-[200px]  ">

                            <div className="h-[70%] w-[100%]  overflow-hidden"> <img src={category.image} className="w-full" alt="" /></div>

                            <h1 className="m-4 text-center text-green-600  font-semibold">{category.name}</h1>

                        </div>

                    </>
                )

                )}
            </Slider>
        );



    }


    return (
        <>
            <SimpleSlider />
                <CatSlider />
                <Products />




        </>

    )
}

export default Home
