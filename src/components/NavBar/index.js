import React, { useState } from 'react'
import Container from '../Container'
import { CloseNav, Header, Nav, NavItemLink, NavList, NavListItem, NavLogo, NavLogoImg, NavMobileHam } from './NavBar.styled'
// logo
import logo from '../../images/logo.svg'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Header>
            <Container>
                <Nav>
                    <NavLogo to="/">
                        <NavLogoImg src={logo} alt='logorentbaix' />
                    </NavLogo>
                    <NavList isOpen={isOpen}>
                        <CloseNav onClick={toggleNav}><svg id="Layer_1" data-name="Layer 1" style={{ display: "block" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.51 49.51" fill="#fff"><defs><style></style></defs><rect className="cls-1" x="351.91" y="430.06" width="63.39" height="6.63" transform="translate(59.94 -552.94) rotate(45)" /><rect className="cls-1" x="351.91" y="430.06" width="63.39" height="6.63" transform="translate(602.45 59.94) rotate(135)" /></svg></CloseNav>
                        <NavListItem>
                            <NavItemLink to="#">coches y motos</NavItemLink>
                        </NavListItem>
                        <NavListItem>
                            <NavItemLink to="#">furgonetas</NavItemLink>
                        </NavListItem>
                        <NavListItem>
                            <NavItemLink to="#">autocaravanas</NavItemLink>
                        </NavListItem>
                        <NavListItem>
                            <NavItemLink to="#">renting flexible</NavItemLink>
                        </NavListItem>
                        <NavListItem>
                            <NavItemLink to="#">contacto</NavItemLink>
                        </NavListItem>
                    </NavList>
                    <NavMobileHam onClick={toggleNav}>
                        <svg id="Layer_1" style={{ display: "block" }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.39 52.26" fill="#000"><defs><style></style></defs><rect className="cls-1" x="0.5" y="0.5" width="63.39" height="6.63" /><rect className="cls-1" x="0.5" y="22.82" width="63.39" height="6.63" /><rect className="cls-1" x="0.5" y="45.13" width="63.39" height="6.63" /></svg>
                    </NavMobileHam>
                </Nav>
            </Container>
        </Header>
    )
}

export default NavBar