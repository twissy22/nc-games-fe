import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from './user';

const Nav = () =>{
const user = useContext(UserContext)
    return (
        <nav className='Nav'>
<Link to="/" className="Nav__link">Home</Link>
<Link to="/myUserpage" className="Nav__link">Userpage</Link>
<span className='Nav__link_logged'> logged in as {user.user.name}</span>
        </nav>
    )
}
export default Nav;