import styled from "styled-components";

export const VehicleCardsSection = styled.section`
`;
export const VehicleCardsSectionContent = styled.div``;

export const VehicleCardsGrid = styled.div`
    display: grid;
    gap: 2rem;
    @media screen and (min-width: 1035px){
        
    grid-template-columns: 1fr 1fr;
   
    }
`;

export const VehicleCardsItem = styled.div`
position: relative;
`;
export const VehicleCardsItemFront = styled.div`
    position: relative;
    width: 100%;
    height: 16rem;
    background: linear-gradient(260deg,var(--primary-deg-color),var(--secondary-deg-color));
    border-radius: 2rem;
    padding: 1rem;
    overflow: hidden;
    box-shadow: 0 0 .8rem .3rem rgba(0,0,0,.2);
    transition: transform .3s ease;
    color: #fff;
`;
export const VehicleCardsItemFrontTitle = styled.p`
text-transform: uppercase;
    font-size: 2rem;
    font-weight: 800;
    
`;
export const VehicleCardsItemFrontSubTitle = styled.p`
text-transform: uppercase;
`;
export const VehicleCardsItemFrontImage = styled.img`
    position: absolute;
    right: -5rem;
    top: 4rem;
    max-width: 20rem;
    @media screen and (min-width: 945px){
        top: 1.5rem;
        max-width: 25rem;
    }
`;

export const VehicleCardsItemInfoBtn = styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 3rem;
    border: 1px solid #fff;
    bottom: 1rem;
    left: 1rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    &::after{
        content: 'I';
    }
`;

export const VehicleCardsItemBack = styled.div`
    visibility: ${({ isActive }) => isActive ? 'visible' : 'hidden'};
    opacity: ${({ isActive }) => isActive ? '1' : '0'};
    position: absolute;
    top: 0;
    background: #fff;
    width: 100%;
    height: 16rem;
    border-radius: 2rem;
    padding: 1rem;
    transition: all .2s ease;
    display: flex;
    align-items: center;
`;
export const VehicleCardsItemBackInfo = styled.ul``;
export const VehicleCardsItemBackInfoItem = styled.li`
    margin-top: .5rem;
`;
export const VehicleCardsItemBackInfoItemRed = styled.span`
    color: var(--main-color);
    font-weight: 500;
`;