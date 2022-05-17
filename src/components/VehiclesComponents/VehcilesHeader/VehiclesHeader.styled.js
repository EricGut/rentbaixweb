import styled from "styled-components";
// banner images

export const VehiclesHeaderBanner = styled.div`
    background: url(${props => props.img}) center no-repeat;
    background-size: cover;
    height: 40vh;
    &::before{
        content: ' ';
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        background: rgba(0,0,0,0.5);
    }
`;
export const VehiclesHeaderBannerContent = styled.div`
    position: relative;
    height: 40vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    @media screen and (min-width:1000px){
        align-items: initial;
    }

`;
export const VehiclesHeaderSubTitle = styled.p`
    opacity: .8;
    
    @media screen and (min-width: 800px){
        font-size: 1.5rem;
    }
    
`;
export const VehiclesHeaderTitle = styled.h1`
    @media screen and (min-width: 1000px){
        font-size: 6rem;
    }

`;