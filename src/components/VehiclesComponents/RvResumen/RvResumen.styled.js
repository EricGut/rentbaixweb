import styled from "styled-components";


export const RvResumenSection = styled.section``;
export const RvResumenContent = styled.section``;
export const RvResumenTableWrapp = styled.div`
    margin-top: 1rem;
    overflow: auto;
`;
export const RvResumenTableWrappTable = styled.table`
    
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  font-size: .8rem;
 
`;
export const Tabletr = styled.tr`
   
   padding: .5rem;
    &:nth-of-type(even){
       background-color: #EEE7DB;
  }
  
`;
export const Tabletd = styled.td`
   border: 1px solid #AAAAAA;
   padding: .5rem;
   &:nth-of-type(1){
    font-weight: 600;
  }
`;
export const Tablebody = styled.tbody`
   border: 1px solid #AAAAAA;
`;
export const Tableth = styled.th`
   background: var(--main-color);
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  border-left: 1px solid #fff;
  padding: .5rem;
  &:first-child{
      background: none!important;
  }
`;
export const RvTableHead = styled.thead`
   
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
`;

export const InfoText = styled.p`
    font-size: .7rem;
`