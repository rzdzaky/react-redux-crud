import React, {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getProducts, productSelectors,updateProduct } from '../features/productSlice';
import { useParams,useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const product = useSelector((state) => productSelectors.selectById(state, id));

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        if(product){
            setTitle(product.title);
            setPrice(product.price);
        }
    }, [product]);

    const handleUpdate = async(e) => {
        e.preventDefault();
        await dispatch(updateProduct({id,title,price}));
        navigate('/');
    }

    return (
        <div onSubmit={handleUpdate} className='bg-slate-50 w-[400px] flex flex-col items-center justify-center border shadow-xl rounded-lg mt-10'>
            <h1 className='text-xl font-medium w-full h-20 items-center justify-center flex border-b'>Edit Product</h1>
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
                    <button className='px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
