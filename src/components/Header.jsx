import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'

const Header = () => {

    const user = useSelector((state)=> state.userState.user)
  return (
    <header className="bg-neutral py-2 text-neutral-content">
        <div className="mx-auto max-w-6xl px-8 flex justify-center sm:justify-end">
            {user ? (
                <div className="flex gap-x-2 sm:gap-x-8 items-center">
                    <div className="text-xs sm:text-sm">
                    <div className="avatar placeholder">
                        <div className="bg-base-200 text-neutral-content w-6 mr-2 rounded-full">
                            <span className="text-black uppercase">{user.name.slice(0,2)}</span>
                        </div>
                        </div>
                        {user.name}
                    </div>
                </div>):(
                <div className="flex gap-x-10 justify-center items-center">
                <Link to="/login" className="link-hover text-sm sm:text-sm">
                    Sign In
                </Link>
                <Link to="/register" className="link-hover text-sm sm:text-sm">
                    Create Account
                </Link>
            </div>
            )
        }
        </div>
    </header>
  )
}

export default Header
