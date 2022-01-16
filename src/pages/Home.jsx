import React from 'react'
import Navbar from '../components/Navbar'
import ShowProduct from '../components/ShowProduct'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='w-full flex flex-col px-24 gap-5 items-center'>
                <ShowProduct />
            </div>
        </>
    )
}

export default Home
