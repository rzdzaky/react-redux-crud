import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { saveProduct } from '../features/productSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createProduct = async (e) => {
        e.preventDefault();
        await dispatch(saveProduct({title,price}));
        navigate('/');
    }

    return (
        <div onSubmit={createProduct} className='bg-slate-50 w-[400px] flex flex-col items-center justify-center border shadow-xl rounded-lg mt-10'>
            <h1 className='text-xl font-medium w-full h-20 items-center justify-center flex border-b'>Add Product</h1>
            <form className="w-full px-10 py-5">
                <div className="w-full flex justify-between">
                    <label className='w-10'>Title</label> :
                    <input 
                    className='border-2 w-48 px-3 font-light' type="text" 
                    placeholder='input title . . .' 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="w-full flex justify-between mt-5">
                    <label className='w-10'>Price</label> :
                    <input 
                    className='border-2 w-48 px-3 font-light' type="text" 
                    placeholder='input price . . .' 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="w-full mt-5 flex justify-center items-center">
                    <button className='px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
