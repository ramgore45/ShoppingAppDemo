import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const {cart} = useSelector((state)=>state)

  return (
  <div className='flex justify-evenly gap-x-[25vw] py-2 w-full shadow-md fixed bg-white top-0 z-[2] py-3'>
    <NavLink to='/'>
      <div className='w-[100px]'>
        <img src='../logo.png' />
      </div>
    </NavLink>

    <div className='flex gap-x-9 justify-center items-center'>
      <p className='uppercase text-[16px] font-semibold'><NavLink to='/'> Home</NavLink></p>
      <p className='relative cursor-pointer'>
      <NavLink to='/cart'>
        <FaShoppingCart className='text-[30px]'/>
      </NavLink>
      <span className='absolute top-0 right-0 bg-green-500 text-white rounded-full text-[14px] h-[15px] w-[15px] flex justify-center items-center
      animate-bounce'>{cart.length}</span>
      </p>
    </div>
  </div>
  );
};

export default Navbar;
