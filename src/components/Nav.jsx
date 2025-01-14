
import { NavLink } from 'react-router-dom'
import NavList from './NavList'
import { BsCart3 } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { IoIosLogOut } from "react-icons/io"
import {useSelector, useDispatch} from 'react-redux'
import CustomApi from '../api'
import { logoutUser } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'
import { clearCartItem } from '../features/cartSlice'
const Nav = () => {
    const user = useSelector((state)=> state.userState.user)
    const countInCart = useSelector((state) => state.cartState.numItemsInCart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await CustomApi.get('/auth/logout')
            dispatch(logoutUser())
            dispatch(clearCartItem())
            navigate('/')
        } catch (error) {
            dispatch(logoutUser())
            dispatch(clearCartItem())
            navigate('/')
        }
      
        
    } 
  return (
    <nav className='bg-base-200'>
        <div className='navbar mx-auto max-w-6xl px-8'>
            <div className='navbar-start '>
                <NavLink to="/" className="hidden lg:flex btn btn-accent text-3xl items-center">
                    E-COMMERCE
                </NavLink>
                {/* PC Device */}
                <div className='dropdown'>
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                        <FaBarsStaggered className='h-6 w-6'/>
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-200 rounded-box w-52'>
                        <NavList />
                    </ul>
                </div>
                {/* Mobile Device */}
                <div className='hidden lg:flex'>
                <ul className='menu menu-horizontal '>
                    <NavList />
                </ul>
            </div>
            </div>
            <div className='navbar-end '>
                <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md">
                    <div className='indicator'>
                        <BsCart3 />
                        <span className='badge badge-accent badge-sm indicator-item'>{countInCart}</span>
                    </div>
                </NavLink>
                {user && (
                        <button  className='btn btn-error btn-outline btn-sm ml-5' onClick={handleLogout}><IoIosLogOut />Logout</button>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Nav
