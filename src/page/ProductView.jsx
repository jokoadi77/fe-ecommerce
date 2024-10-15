import CustomApi from "../api"
import { Link, useLoaderData } from "react-router-dom";
import Filter from "../components/Filter";
import CardProduct from "../components/CardProduct";
import Pagination from "../components/Pagination";
import { BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";

export const loader = async ({request}) =>{

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
  const {data} = await CustomApi.get('/product', {params: params})
  // console.log(params);
  const products = data.data 
  // console.log(products);
  const pagination = data.pagination
  

  return {products, params, pagination}
} 
const ProductView = () => {
  const user = useSelector((state)=> state.userState.user)
  const {products} = useLoaderData()
  // console.log(products);
  
  return (

   <>
    <Filter />
    {user && user.role === "owner" &&(
    <div className="flex justify-end mt-5">
      <Link to="/product/create" className="btn btn-accent"> <BsPlus className="w-5 h-5"/> Add Product</Link>
    </div>

    )}
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10'>
      {!products.length ? (
        <h1 className="text-2xl font-bold mt-5">Product not found</h1>
      ) : (
        products.map((item) => (
          <CardProduct item={item} key={item._id} user={user}/>
     ))
      ) }
    </div>
    <div className="mt-10 flex justify-center">
    <Pagination />
    </div>
   </>
  )
}

export default ProductView
