import React from 'react'
import EditProduct from '../components/EditProduct'
import Navbar from '../components/Navbar'

const Edit = () => {
    return (
        <>
            <Navbar />
                <div className='w-full flex flex-col px-24 gap-5 items-center'>
            <EditProduct />
            </div>
        </>
    )
}

export default Edit
