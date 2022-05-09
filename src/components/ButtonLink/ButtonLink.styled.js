import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const ButtonLinkWrapp = styled.div`
   
`;
export const Button = styled(Link)`
    color: var(--main-color);
    text-transform: uppercase;
    border: 2px solid var(--main-color);
    padding: .5rem;
    font-weight: 600;
    border-radius: .5rem;
    transition: all .2s ease;
    &:hover{
        background-color: var(--main-color);
        color: #fff;
    }
`;
