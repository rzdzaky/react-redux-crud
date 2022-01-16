import React from 'react'
import AddProduct from '../components/AddProduct'
import Navbar from '../components/Navbar'

const Add = () => {
    return (
        <>
            <Navbar />
            <div className='w-full flex flex-col px-24 gap-5 items-center'>
                <AddProduct />
            </div>
        </>
    )
}

export default Add
