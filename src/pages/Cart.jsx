import { useSelector } from "react-redux";
import { Cartproduct } from "../components/Cartproduct";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Cart = () => {

  console.log('printingcart')
  const {cart} = useSelector((state)=>state)
  console.log(cart)
  const [totalAmount, setTotalAmount] = useState(0)
  
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,cur)=>(acc+cur.price), 0 ))
  },[cart])
 

  return (
    <div>
      {
        cart.length>0 ?
        (
          <div className='flex font-[timesnewroman] w-full gap-x-10 mb-[10px] mt-[30px]'>
            <div>
              {
                cart.map((item,index)=>(
                  <Cartproduct key={index} item={item}/>
                ))
              }
            </div>
            <div className="relative">
            <div className='flex flex-col gap-y-5 relative h-full max-h-[85vh] w-[300px] fixed'>
              <h1 className='text-violet-500 font-semibold text-2xl'>Cart Summary</h1>
              <hr/>
              <h1 className='text-violet-500 font-semibold text-2xl'> Total Quantity : <span className='text-black'>{cart.length}</span></h1>
              
              <div className='flex flex-col absolute bottom-[20px] gap-y-3 w-full mx-auto'>
                <h1 className='text-violet-500 font-semibold text-2xl'>Total Amount : <span className="text-green-600">$ {totalAmount}</span> </h1>
                <button className='bg-green-800 tracking-[2px] text-white font-semibold py-2 rounded-[50px] border shadow-lg'>CHECKOUT</button>
              </div>
            </div>
            </div>
          </div>
        ):
        (
          <div className="font-[timesnewroman] flex flex-col justify-center items-center gap-y-2 ">
            <h2 className="font-semibold text-[30px]">No Item in Cart</h2>
            <NavLink to='/'><button className='w-[200px] bg-green-800 tracking-[2px] text-white font-semibold py-2 rounded-[50px] border shadow-lg'>
              Shop Now</button></NavLink>
          </div>
        )

      }
    </div>
        
  );
};

export default Cart;
