import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Container} from '../Styles/Global.Styles';


export const Nav = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
background-color: lightgrey;
display: flex;
justify-content: center;
align-items: center;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
${Container};
`;

export const NavLogo = styled(Link)`
color: #000;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2rem;
font-weight: 600;
transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
`;

export const MenuIcon = styled.div`
display: none;

@media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
}
`;

export const Menu = styled.ul`
display: flex;

@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
}
`;

export const MenuItem = styled.li`
list-style: none;


@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;
export const UserName = styled.span`
color: #666666;
font-size: 1.5rem;
padding: 1rem 2rem;

@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;
export const MenuDiv = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 1.5rem;
color: #666666;
padding: 1rem 2rem;
height: 100%;
justify-content: space-between;
align-items: center;
transition: all .2s ease;

&:hover {
    color: #000;
    transform: traslateY(-3rem);

}


@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;

export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;

export const MenuLinkBtn = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;

`;