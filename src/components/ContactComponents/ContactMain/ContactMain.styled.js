import styled from "styled-components";

export const ContactMainSection = styled.section``;
export const ContactMainSectionContent = styled.div`
`;
export const ContactMainSectionContentInfoWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`;
export const ContactMainSectionContentInfo = styled.div`
    
`;

export const ContactFlexInfoTextWrapp = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`;
export const ContactFlexInfoTextIcon = styled.img`
    width: 2rem;
`;
export const ContactFlexInfoTextLink = styled.a`
    color: #000;
`;
export const ContactFlexInfoSchedule = styled.p`
margin-top: 2rem;
font-size: 1rem;
text-transform: uppercase;
    font-weight: 400;
`;
export const ContactMainSectionContentMap = styled.div`
margin-top: 1rem;
    width: 100%;
    @media screen and (min-width: 883px){
        width: 50%;
        margin-top: initial;
    }
`;
export const ContactMainSectionContentForm = styled.div`
margin-top: 2rem;
    @media screen and (min-width: 1017px){
        display: grid;
    place-items: center;
    }
`;
export const ContactMainSectionContentFormTitle = styled.p`
    text-transform: uppercase;
    font-size: 1.5rem;
    @media screen and (min-width: 900px){
         font-size: 2rem;;
    }
`;
export const ContactMainSectionContentFormWrapper = styled.div`
 margin-top: 2rem;
    @media screen and (min-width: 900px){
        width: 50%;
    }
`;