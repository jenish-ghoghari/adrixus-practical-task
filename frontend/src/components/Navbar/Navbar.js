//In the Navbar.js file
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Nav, NavbarContainer, NavLogo, MenuIcon, Menu, MenuItem, MenuLink, UserName, MenuDiv } from '../../Styles/Navbar.Styles'
import { IconContext } from 'react-icons';

const Navbar = () => {
//click is the initial state and setclick will be the update state
    const [click, setClick] = useState(false);

//Create a function to handle the click state of the menu icon. 
//if the menu icon was the menu bar at the beginning when clicked it will have the close icon
    const handleClick = () => setClick(!click);
    const userName = localStorage.getItem('userName');
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}> 
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            Users
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <MenuDiv>
                        <UserName>{userName} | Admin</UserName>
                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink  to="/Logout">Logout</MenuLink>
                            </MenuItem>
                        </Menu>
                        </MenuDiv>
                    </NavbarContainer>


                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;