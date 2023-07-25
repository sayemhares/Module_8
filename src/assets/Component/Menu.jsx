
import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <div>

            <ul>
                <li><Link to='/'>Hoem</Link></li>
                <li><Link to='/Income'>Income</Link></li>
                <li><Link to='/Expence'>Expence</Link></li>
                
               
            </ul>
           
        </div>
    );
};

export default Menu;