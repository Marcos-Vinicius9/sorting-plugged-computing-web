import styled from 'styled-components';

export const AppWrapper = styled.div`

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  max-width: 600px;

  h2 {
    font-size: 1rem;
    margin-bottom: 20px;
    color:#07377A;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
    cursor: pointer;
    background-color: #07377A;
    color: white;
    border-radius: 7px;
    width: 450px;
    height: 50px;
    margin: 1.5rem 0;
    box-shadow: 0 8px 5px #07377a3f;
    font-size: 1rem;
    font-weight: bold;
    text-align:center;  

    &.selected {
      background-color: red;
    }

    &:hover {
      background-color: #ddd;
    }
  }

  img {
    width: 65%;
    max-width: 500px;
    margin-bottom: 20px;
  }
`;
