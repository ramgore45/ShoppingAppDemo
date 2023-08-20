
import { FaStar } from 'react-icons/fa'
import {MdDelete} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/Slices/cartSlice'
import { toast } from 'react-hot-toast'


export const Cartproduct = ({item}) => {

  const dispatch = useDispatch()
  const {cart} = useSelector((state)=>state)

  const removeItem = () => {
    dispatch(remove(item.id))
    toast.error('Remove Item From Cart')
  }
  
  return (
    <div >
       <div className='flex gap-x-5 max-w-[550px] border-b-2 pb-[15px] mb-5'>
          <div className='w-[250px] h-auto'>
            <div ><img src={item.image} className='w-full h-[200px]'/></div>
          </div>
        
          <div className='flex flex-col gap-y-2'>
            <div >
                <p className='font-bold text-[25px] mb-1'>{item.title}</p>
                <p className='text-[18px]'>{item.description.substring(0 , 100)} ...</p>
            </div>
            
            <div className='flex justify-between'>
                <p className='flex gap-x-2 text-[14px]'><FaStar className='text-yellow-500 my-auto'/>{item.rating.rate}</p>
            </div>


            <div className='flex justify-between'>
              <p className='text-green-700 font-semibold'>$ {item.price}</p>
              <button className='bg-gray-300 rounded-full h-[20px] w-[20px] flex justify-center items-center' 
              onClick={removeItem}>
              <MdDelete className=' text-red-500 ' />
              </button>
            </div>
          </div>
        </div>

        

    </div>
  )
}
