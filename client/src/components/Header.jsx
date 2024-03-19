import { Avatar, Button, Dropdown, DropdownItem, Navbar,  TextInput } from 'flowbite-react'
import { Link,useLocation } from 'react-router-dom';
import React from 'react';
import {AiOutlineSearch }from 'react-icons/ai';
import{FaMoon}from 'react-icons/fa';
import {useSelector} from 'react-redux';


export default function Header() {
  //for activing the path name 
  const path=useLocation().pathname;
  const {currentUser}=useSelector(state=>state.user);
  return (
    //IMPORTANT CONCEPT 
    // -->Link to  method
    // -->flowbite -react 
    // -->'hidden lg:inline'
    //-->lg:hidden
    //-->Navbar.collapse
    //-><Navbar.Link active={path=== "/project" } > <Link to='/project'>Projects</Link></Navbar.Link> 
    //-->hidden sm:inline
    //-->outline

    <Navbar className='border-b-2'>
      {/* abhinav blog */}
      <Link to="/" className='self -center whitespace-nowrap text-sm sm:text-xl
      font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Abhinav</span>
        Blog
      </Link>


      {/* //search  */}
      <form >
        <TextInput
        type='text'
        placeholder='search...'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'/>
      </form>
      

      {/* //responsive search  */}
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
      </Button>

      {/* sigin + Famoon */}
      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>

        {currentUser ? (
            <Dropdown arrowIcon={false}
              inline
              label={<Avatar
                alt='user'
                img={currentUser.profilePicture}  
                rounded
              />}
            >
              <Dropdown.Header>
                <span  className='block text-sm'>@{currentUser.username}</span>
                <span  className='block text-sm font-medium truncate'>{currentUser.email}</span>
              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
                <DropdownItem> Profile</DropdownItem>
                </Link>
                <Dropdown.Divider/>
                <DropdownItem>Sign Out</DropdownItem>



            </Dropdown>
          ): (
            <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue'outline  pill>
              Sign In
            </Button>
          </Link>
          )
        }
        
       
       <Navbar.Toggle/>
    </div>



    {/* //this part home +about+project  */}
      <Navbar.Collapse>
        {/* active={path=== "/" }-->yeh use kiyen hain to active the link for their particular routes ke liye */}

          <Navbar.Link active={path=== "/" }>
            <Link to='/'>
              Home
            </Link>
            </Navbar.Link>
            <Navbar.Link  active={path=== "/about" } >
            <Link to='/about'>
              About
            </Link>
            </Navbar.Link>
            <Navbar.Link active={path=== "/project" } >
            <Link to='/project'>
              Projects
            </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
