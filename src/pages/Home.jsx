import {useState, useEffect} from 'react'
import { Spinner } from '../components/Spinner';
import { toast } from 'react-hot-toast';
import Product from '../components/Product';


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

 

   const [posts, setPosts] = useState([])
   const [loading, setLoading] = useState(false)

   async function fetchProducts(){
     setLoading(true)
     try{
      const result = await fetch(API_URL)
      const data = await result.json()

      setPosts(data)
      console.log('Show data in posts')
      console.log(posts)
     }
     catch(error){
      toast.error('there is no data')
      setPosts([])
     }
    setLoading(false)
   }
  
   useEffect(()=>{
    fetchProducts()
   },[])

  return (
  <div>
    <div className='flex justify-center items-center flex-wrap w-[1050px] mt-[30px]'>
      {
        loading?
        <Spinner/>:
        (
          
            posts.map((post)=>(
              <Product key={post.id} post={post}/>
            ))
        
        )
      }
    </div>
  </div>
  );
};

export default Home;
