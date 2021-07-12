import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import auth from './firebase';

function Header() {     /* NavBar */
    const [{basket, user}] = useStateValue();

    const login = () => {
        auth.signOut();
    }

    return (
        <nav className="header">
            
            {/* Logo on the left */}
            <Link to="/">
                 <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG28.png" alt="logo_img"/>
            </Link>
           
            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            {/* 3 links */}
            <div className="header__nav">
                <Link to={!user && '/login'} className="header__link">
                    <div onClick={login} className="header__options">
                        <span className="header__op1">Hey {user?.email}</span>
                        <span className="header__op2">{user ? 'Sign out' : 'Sign in'}</span>
                    </div>
                    
                </Link>

                <Link to='/login' className="header__link">
                    <div className="header__options">
                        <span className="header__op1">Returns</span>
                        <span className="header__op2">& orders</span>
                    </div>
                    
                </Link>
            
                <Link to='/login' className="header__link">
                    <div className="header__options">
                        <span className="header__op1">Your</span>
                        <span className="header__op2">Prime</span>
                    </div>
                    
                </Link>

                <Link to="./checkout" className="header__checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__op2 header__basketCount">{basket?.length}</span>
                    </div>
                    
                </Link>
            </div>
            {/* Basket icon with number */}

        </nav>
    )
}

export default Header
