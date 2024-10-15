/* eslint-disable react/prop-types */
import { Link, useRevalidator } from "react-router-dom"
import { priceFormat } from "../utils"
import { FaPencil, FaTrash } from "react-icons/fa6"
import CustomApi from "../api"
import { toast } from "react-toastify"

const CardProduct = ({item, user}) => {
  const {revalidate} = useRevalidator()
  return (
   <>
       <div className="card bg-base-100 shadow-xl h-full" key={item._id}>
       <Link to={`/product/${item._id}`}>
          <figure>
        <div className="relative">
            <img
              src={item.image}
              alt="Shoes" 
              className="h-[250px] w-[340px] object-cover"
              />
          {item.stock < 1 && (
            <span className="absolute top-0 right-0  bg-warning font-bold text-4xl">Sold out</span>
          )}
        </div>
          </figure>
          </Link>
  <div className="card-body">
    {user && user.role === "owner" && (

    <div className="flex justify-end gap-x-3">
      <FaTrash onClick={ async() => {
        await CustomApi.delete(`/product/${item._id}`)
        toast.error('Deleted')
        revalidate()
      }}  
      className="text-red-500 cursor-pointer"/>
      <Link to={`/product/${item._id}/edit`}><FaPencil  className="text-primary cursor-pointer"/></Link>
    </div>
    )}
    <h2 className="card-title">
      {item.name}
      
    </h2>
    <p className="text-accent text-lg">{priceFormat(item.price)}</p>
    
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{item.category}</div>
      <div className="badge badge-outline">Total: {item.stock}</div>
    </div>
  </div>
</div>
   </>
  )
}

export default CardProduct
