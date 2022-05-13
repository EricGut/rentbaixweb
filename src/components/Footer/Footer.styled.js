import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterBlock = styled.footer`
margin-top: 5rem;
    font-size: .6rem;
    @media screen and (min-width: 1359px){
        font-size: .8rem;
    }
`;
export const FooterContent = styled.div``;
export const FooterPolitics = styled.div`
padding: 1rem 0;
    background: #373737;
    text-align: center;
`;
export const FooterPoliticsLinks = styled(Link)`
    color: #fff;
`;
export const FooterCopy = styled.div`
    padding: 1rem 0;
    background: #1b1b1b;
    text-align: center;
    
`;
export const FooterCopyText = styled.p`
color: #fff;
`;
