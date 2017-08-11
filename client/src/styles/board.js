import styled from 'styled-components';

export const BoardStyle = styled.div`
  text-align: center;
  h1, h3{
    margin: 4px;
  }
`;
export const TileStyle = styled.div`
box-sizing: border-box;
border: 3px solid black;
background: #2A3698;
height: 16.67%;
display: flex;
justify-content: center;
align-items: center;
font-size: ${props => props.active ? "1rem" : "2rem"};
font-family: 'Lato';
font-weight: 700;
color: ${props => props.quote ? "#ffff5f" : "FFF"}
`;

export const TopicStyle = styled.div`
height: 100%;
width: 20%;
`;
export const BoardStyles = styled.div`
  background-color: black;
  height: 80vh;
  width: 90vw;
  margin: 0 auto;
  color: white;
`;

