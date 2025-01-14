import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import CartList from "../components/CartList"
import CartTotal from "../components/CartTotal"

const CardView = () => {
  const user = useSelector((state) => state.userState.user)
  const numItemInCart = useSelector((state) => state.cartState.numItemsInCart)
  if(numItemInCart === 0) {
    return (
      <>
           <div className="max-w-4xl mx-auto px-10 py-4 bg-white">
      <div>
      </div>
      <div className="flex flex-col items-center justify-center py-12 sm:flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-24 w-24 text-gray-400 mb-6">
          <path
            d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z">
          </path>
        </svg>
        <p className="text-gray-600 text-xl font-semibold mb-6">Your shopping cart is empty.</p>
        <Link to='/products'
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
          Let`s go shopping!
        </Link>
      </div>
    </div>
      </>
    )
  }
  return (
    <>
      <div className="border-b border-primary pb-5 mt-5">
        <h2 className="text-2xl font-bold capitalize ">Order Summary</h2>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
        <CartList />
        </div>
        <div className="lg:col-span-4 lg:pl-4 font-bold">
          <CartTotal />
          {user ? (
            <Link to='/checkout' className="btn btn-accent btn-block mt-8">Checkout</Link> 
          ): (
            <Link to='/login' className="btn btn-accent btn-block mt-8">Checkout</Link>
          )    
        }
        </div>
      </div>
    </>
  )
}

export default CardView
