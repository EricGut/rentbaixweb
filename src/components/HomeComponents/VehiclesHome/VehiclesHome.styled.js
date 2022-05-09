import { Link } from "react-router-dom";
import styled from "styled-components";

export const VehiclesHomeSection = styled.section``;
export const VehiclesHomeContent = styled.div``;
export const VehiclesHomeTitleLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
`;
export const VehiclesHomeGrid = styled.div`
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
`;
export const VehiclesGridCard = styled.div`
    position: relative;
    width: 100%;
    height: 16rem;
    background: linear-gradient(260deg,var(--primary-deg-color),var(--secondary-deg-color));
    border-radius: 2rem;
    padding: 1rem;
    overflow: hidden;
    box-shadow: 0 0 .8rem .3rem rgba(0,0,0,.2);
`;
export const VehiclesCardTitle = styled.p`
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    color: #fff;
`;
export const VehiclesCardImg = styled.img`
    position: absolute;
    right: -5rem;
    top: 4rem;
`;
export const VehiclesCardLinkWrapp = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100%;
    padding: .5rem 0;
    display: grid;
    place-content: center;
`;
export const VehiclesCardLink = styled(Link)`
    text-transform: uppercase;
    color: var(--main-color);
    font-weight: 700;

`;