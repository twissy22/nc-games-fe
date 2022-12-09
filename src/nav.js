import { useContext } from 'react';
import {Link} from 'react-router-dom'
import Categories from './categories';
import { UserContext } from './user';


const Nav = () =>{
const user = useContext(UserContext)
    return (
        <nav className='Nav'>
<Link to="/myUserpage" className="Nav__link">Userpage</Link>
<span className='Nav__link_logged'> logged in as {user.user.name}</span>
<Categories />
        </nav>
    )
}
export default Nav;