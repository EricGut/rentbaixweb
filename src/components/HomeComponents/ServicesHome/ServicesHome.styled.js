import styled from "styled-components";

export const ServicesHomeSection = styled.section`

`;

export const ServicesHomeSectionContent = styled.div`

`;

export const ServicesDisplayGrid = styled.div`
    margin-top: 2rem;
    display: grid;
    gap: 3rem;
    @media screen and (min-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
export const ServicesDisplayGridCard = styled.div`
    display: flex;
    align-items: baseline;
`;
export const CardIcon = styled.img`
    padding-right: .5rem;
    width: 5rem;
`;

export const CardText = styled.div`

`;

export const CardTitle = styled.p`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--main-color);
    font-weight: 600;
    `;
export const CardDescription = styled.p`
    padding: .5rem 0;
    margin-bottom: 1rem;
`;

