import { FaStar } from "react-icons/fa";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { add,remove} from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";



const Product = ({post}) => {

  const dispatch = useDispatch()
  const {cart} = useSelector((state)=> state)

  const addToCart = ()=>{
    dispatch(add(post))
    toast.success('Add Item To Cart')
  }

  const removeItem = () => {
    dispatch(remove(post.id))
    toast.error('Remove Item From Cart')
  }

  const info = post.description.substring(0,100)
  const subtitle = post.title.substring(0, 20)

  return (
  <div className='flex flex-col w-[250px] font-[timesnewroman] border-2 p-5 rounded-md shadow-md m-[5px]
  hover:scale-105 transition duration-300 ease-in shadow-lg bg-white z-[0]'>
      <div >
        <p className='font-bold text-[15px]'>{subtitle} ...</p>
        <p className='text-[12px]'>{info} ...</p>
      </div>
      <div ><img src={post.image} className='w-full h-[200px]'/></div>
      <div className='flex justify-between'>
        
        <p className='flex gap-x-2 text-[14px]'><FaStar className='text-yellow-500 my-auto'/>{post.rating.rate}</p>
      </div>
      <div className='w-full flex items-center justify-between text-[14px] mx-auto my-2' >
      <p className="text-green-600 font-semibold">$ {post.price}</p>
         {
          cart.some((p)=> p.id == post.id) ?
          (
            <button 
            className="w-[120px] bg-gray-700 py-1 text-white border-2 border-gray-900  rounded-[25px] "
            onClick={removeItem}
            >
              Remove Item
            </button>
          )  :
          (
            <button 
            className="w-[120px] bg-gray-700 border-2 border-gray-900 py-1 text-white  rounded-[25px] "
            onClick={addToCart}
            >
              Add Item
            </button>
          )
         }
         
      </div>
  </div>
  );
};

export default Product;
