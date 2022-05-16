import styled from 'styled-components'

export const HeroHomeSection = styled.section``;
export const HeroHomeContent = styled.div`
    @media screen and (min-width: 1445px){
        display: flex;
        flex-direction: row-reverse;
    }
`;
export const HeroHomeMainBlock = styled.div`
    margin-top: 2rem;
    @media screen and (min-width: 1445px){
        margin-top: initial;
    }
`;
export const HeroHomeMainText = styled.h1`
    text-transform: uppercase;
    font-weight: 400;
`;
export const HeroHomeMainTextBold = styled.span`
    font-weight: 800;
`;
export const HeroHomeMainTextRed = styled.span`
    color: var(--main-color);
`;