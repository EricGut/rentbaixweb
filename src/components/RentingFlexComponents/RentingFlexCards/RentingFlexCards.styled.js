import styled from "styled-components";

export const RentingFlexCardsSection = styled.section``;
export const RentingFlexCardsSectionContent = styled.div``;
export const RentingFlexCardsGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    @media screen and (min-width: 900px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
export const RentingFlexCardsGridCard = styled.div`
    box-shadow: 0 0 .8rem .3rem rgba(0,0,0,.2);
    border-radius: 1rem;
    @media screen and (min-width: 900px){
        transition: all ease .3s;
        &:hover{
            transform: translateY(-1rem);
        }
    }
`;
export const RentingFlexCardsGridCardHeader = styled.div`
    background: var(--main-color);
    padding: 1rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    text-align: center;
    color: #fff;
`;
export const RentingFlexCardsGridCardHeaderTitle = styled.p`
    font-weight: 600;
    font-size: 2rem;
`;
export const RentingFlexCardsGridCardHeaderSubTitle = styled.p`
    font-size: 1.4rem;
`;
export const RentingFlexCardsGridCardBody = styled.div`
padding: 1rem;
text-align: center;
`;
export const RentingFlexCardsGridCardBodyInfo = styled.ul`
`;
export const RentingFlexCardsGridCardBodyInfoItems = styled.li`
margin-top: 1rem;
&:first-child{
    margin-top: initial;
}
`;


