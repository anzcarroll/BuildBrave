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
background: #BFDFD0;
height: 16.67%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
font-size: ${props => props.active ? "1rem" : "2rem"};
font-family: 'BenchNine', sans-serif;
font-weight: 700;
color: ${props => props.quote ? "#ffff5f" : "FFF"}
`;

export const TopicStyle = styled.div`

height: 90%;
width: 20%;
`;
export const BoardStyles = styled.div`
  display: flex;
  justify-content: flex-wrap;
  background-color: rgb(74,94,88);
  height: 200vh;
  width: 80vw;
  margin: 0 auto;
  color: white;
`;

