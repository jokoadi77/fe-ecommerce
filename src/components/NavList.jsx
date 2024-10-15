
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const links = [
    {id : 1, url: 'about', text: "about"},
    {id : 2, url: 'products', text: "products"},
    {id : 3, url: 'orders', text: "orders"},
] 

const NavList = () => {

    const user = useSelector((state) => state.userState.user)
  return (
    <>
        {links.map((link) => {
            const {id, url, text} = link
            if((url === 'orders') && !user){
                return null
            }
            return (
                <li key={id}>
                    <NavLink className="capitalize" to={url}>
                        {text}
                    </NavLink>
                </li>
            )
        })}
    </>
  )
}

export default NavList
