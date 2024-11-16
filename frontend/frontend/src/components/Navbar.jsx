import React, { useState } from 'react';
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const cartItems = useSelector(state => state.cart.cartItems);
  
  
  
  const {currentUser, logout} = useAuth()
  const handleLogOut = () => {
    logout()
  }

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to='/'> 
            <HiMiniBars3CenterLeft className="text-2xl" />
          </Link>

          {/* Search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input 
              type="text" 
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          {currentUser ? (
            <>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img
                  src={avatarImg}
                  alt=""
                  className="w-7 h-7 rounded-full ring-2 ring-blue-500"
                />
              </button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                  <ul className="py-2">
                    {navigation.map((item) => (
                      <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                        <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                      onClick={handleLogOut}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link to="/login">
              <HiOutlineUser className="text-2xl" />
            </Link>
          )}
          
          <button className="hidden sm:block">
            <HiOutlineHeart className="text-2xl" />
          </button>
          <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
            <HiOutlineShoppingCart className="text-xl" />
            {
              cartItems.length > 0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> 
              : <span className="text-sm font-semibold sm:ml-1">0</span>
            }
            
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;