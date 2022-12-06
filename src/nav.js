// import { useContext } from 'react';
import {Link} from 'react-router-dom'
// import { UserContext } from './user';

const Nav = () =>{
    // const user = useContext(UserContext)
    return (
        <nav className='Nav'>
<Link to="/" className="Nav__link">Home</Link>
<Link to="/myUserpage" className="Nav__link">myUserpage</Link>
<span> logged in as Adam</span>
        </nav>
    )
}
export default Nav;