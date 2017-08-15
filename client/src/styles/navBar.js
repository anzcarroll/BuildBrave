import styled from 'styled-components';

const NavBar = styled.div`
  height: 150px;
  background-color: rgb(74,94,88);
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    padding: 0 15px;
    color: white;
    text-decoration: none;
    font-family: 'BenchNine', sans-serif;    
    font-size: 2rem;
}
  h1 {
      font-family: 'Lobster Two', cursive;
      font-size: 5rem;
      color: #42A585;
  }
`;

export default NavBar;
