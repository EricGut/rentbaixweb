import styled from "styled-components";


export const VehicleCarIconsSection = styled.section``;
export const VehicleCarIconsSectionContent = styled.div``;

export const VehicleIconsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    gap: 2rem;
`;
export const VehicleIconsGridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const VehicleIconsGridItemImg = styled.img`
    width: 5rem;
`;
export const VehicleIconsGridItemText = styled.p`
    margin-top: 1rem;
    font-size: .8rem;
    @media screen and (min-width: 900px){
        font-size: initial;
    }
`;