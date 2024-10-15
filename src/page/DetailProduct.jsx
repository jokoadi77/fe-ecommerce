import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import CustomApi from "../api"
import { FaCartPlus } from "react-icons/fa6";
import { generateSelectAmount, priceFormat } from "../utils";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";


const DetailProduct = () => {
    let {id} = useParams()
    const [product, setProduct] = useState("")
    const [amount, setAmount] = useState(1)

    //store
    const dispatch = useDispatch()

    const handleAmount = (e) => {
      setAmount(parseInt(e.target.value))
    }

    const productCart = {
      cartId: product._id + product.name,
      productId: product._id,
      image: product.image,
      name: product.name,
      price: product.price,
      stock: product.stock,
      amount,
    }

    const handleCart = () => {
      dispatch(addItem({product:productCart}))
      
    }

    const productData = async () => {
      const  {data} = await CustomApi.get(`/product/${id}`)
        setProduct(data.data);
        
    }

    useEffect(() => {
        productData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <>
       <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <div className="relatice">
    <img
      src={product.image}
      alt={product.name} 
      className="w-[600] h-[550px] object-cover"
      />
      {product.stock < 1 && (
            <span className="absolute top-0 right-0  bg-warning font-bold text-4xl">Sold out</span>
      )}
    
    </div>
      
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <span className="text-3xl text-accent font-bold mt-2">{priceFormat(product.price)}</span>
    <span className="badge badge-accent">{product.category}</span>
    <span className="mt-3 font-bold ">Stock : {product.stock}</span>
    <p className="mt-3">{product.description}</p>
    <div className="card-actions justify-end">
      <div className="p-8 flex flex-col gap-y-4">
        {product.stock > 0 && (
          <>
             <label className="form-control">
             <label className="label">
               <span className="capitalize label-text">Amount</span>
             </label>
             <select name="amount" className="select select-bordered" onChange={handleAmount}>
               {generateSelectAmount(product.stock)}
             </select>
           </label>
           <button className="btn btn-accent lg:btn-lg" onClick={handleCart}> <FaCartPlus />ADD to Cart</button>
           </>
        ) }
     
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default DetailProduct
