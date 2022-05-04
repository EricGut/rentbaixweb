import { Link } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.header`
    width: 100%;
    padding: 1rem 0 1.5rem 0;
    background: #fff;
    border-bottom: solid 2px var(--main-color);
`;

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLogo = styled(Link)`
    max-width: 100%;
`;

export const NavLogoImg = styled.img`
    width: 5rem;
     @media screen and (min-width: 1260px){
         width: 6rem;
    }
`;

export const NavList = styled.ul`
    position: absolute;
    background: rgba(0,0,0,0.9);
    top: ${({ isOpen }) => (isOpen ? '0' : '-100vh')};
    left: 0;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    transition: all ease-out .2s;
    @media screen and (min-width: 1260px){
        padding-top: 1rem;
        position: initial;
        background: initial;
        width: initial;
        height: initial;
        flex-direction: initial;
        justify-content: initial;
        gap: initial;
    }
`;

export const NavListItem = styled.li`
    text-transform: uppercase;
    font-size: 1.2rem;
    @media screen and (min-width: 1260px){
        font-size: initial;
        margin-right: 3rem;
    }
    &:nth-of-type(5){
        margin-right: initial;
    }
    &::after{
        content: ' ';
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--main-color);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform ease .2s;
    }
    &:hover::after{
        transform: scaleX(1);
    }
`;

export const NavItemLink = styled(Link)`
    color: #fff;
    @media screen and (min-width: 1260px){
        color: #000;
    }
`;

export const NavMobileHam = styled.div`
    cursor: pointer;
    width: 1.7rem;
    @media screen and (min-width: 1260px){
        display: none;
    }
`;
export const CloseNav = styled.div`
    cursor: pointer;
    width: 1.7rem;
    position: absolute;
    top: 1.4rem;
    right: 2rem;
`;