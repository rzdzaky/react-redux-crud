import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, productSelectors, deleteProduct } from '../features/productSlice';
import { Link } from 'react-router-dom';

const ShowProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector(productSelectors.selectAll);

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch])

    return (
        <div className='bg-slate-50 w-[400px]  flex flex-col items-center justify-center border shadow-xl rounded-lg mt-10 mb-20'>
            <h1 className='text-xl font-medium w-full h-20 items-center justify-center flex'>List Product</h1>
            {products.map((product,index) => (

            <div key={product.id} className="w-full px-10 py-5 border-y">
                <div className="w-full flex justify-between items-center ">
                    <h1 className='w-10'>No</h1> :
                    <h1 className='w-48 text-center'>{index+1}</h1>
                </div>
                <div className="w-full flex justify-between items-center mt-2">
                    <h1 className='w-10'>Title</h1> :
                    <h1 className='w-48 text-center'>{product.title}</h1>
                </div>
                <div className="w-full flex items-center justify-between mt-2">
                    <h1 className='w-10'>Price</h1> :
                    <h1 className='w-48 text-center'>{product.price}</h1>
                </div>
                <div className="w-full flex items-center justify-between mt-2">
                    <h1 className='w-10'>Actions</h1> :
                    <div className="w-48 flex items-center justify-around">
                        <Link to={`edit/${product.id}`} className='bg-blue-500 text-white w-16 rounded-lg font-light text-center'>Edit</Link>
                        <button onClick={() => dispatch(deleteProduct(product.id))} to='edit' className='bg-red-600 text-white w-16 rounded-lg font-light text-center'>Delete</button>
                    </div>
                </div>
            </div>

            ))}
            <Link to='/add' className='px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 my-5'>Add Product</Link>
        </div>
    )
}

export default ShowProduct
