import styled from "styled-components";





export const Container = styled.div<{ openMenu: boolean }>`
width:100%;
max-width:1600px;
display:grid;
grid-template-columns: ${({openMenu}) => openMenu? '1fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr'};
column-gap: 16px;
row-gap: 16;
 `;
