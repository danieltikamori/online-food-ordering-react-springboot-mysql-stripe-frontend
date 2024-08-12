import React from 'react'
import "./Home.css"
import MultipleItemCarousel from './MultipleItemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';
// import Restaurants from 'src/Data'

const restaurant=[1,1,1,1,1,1,1]
const Home = () => {
  return (
    <div className='pb-10'>
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>
        <div className='w-[50vw] z-10 text-center'>
          <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Tika Foods</p>
          <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the Convenience: Delicious and Fast Delivered. </p>

        </div>
        <div className='cover absolute top-0 left-0 right-0'></div>
        <div className='fadout'></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
                <div className="">
                    <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">Top Meals</p>
                </div>
                <MultipleItemCarousel/>
            </section>
            <section className="px-5 lg:px-20 pt-10">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-400 py-3 ">
                        Order from your Favorite and Handpicked Restaurants
                    </h1>
                    <div className="flex flex-wrap items-center justify-around gap-5">
                        {restaurant.map((item)=><RestaurantCard key={item}/>)}

                    </div>
                </div>

            </section>

    </div>
  );
}

export default Home