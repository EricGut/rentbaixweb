import styled from "styled-components";
// banner image
import rentingfleximg from '../../../images/vehiclesBanner/rentingflex.jpg'

export const RentingFlexBanner = styled.div`
width: 100%;
    background: url(${rentingfleximg}) center no-repeat;
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
export const RentingFlexBannerContent = styled.div`
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
export const RentingFlexBannerTitle = styled.h1`
    text-transform: uppercase;
    @media screen and (min-width: 1000px){
        font-size: 6rem;
    }
`;
export const RentingFlexBannerInfo = styled.div`
    box-shadow: 0 0 .8rem .3rem rgba(0,0,0,.2);
    padding: 3rem 0;
    
`;
export const RentingFlexBannerInfoContent = styled.div`
    text-align: center;
`;
export const RentingFlexBannerInfoTitle = styled.h1`
    
`;
export const RentingFlexBannerInfoSubTitle = styled.h2`
    color: var(--main-color);
    margin: 1rem 0;
`;
export const RentingFlexBannerInfoText = styled.p`
   
`;