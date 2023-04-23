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


  .toast{
    position: absolute;
    top: 110px;
  }
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

  }

  & .wrong{
    background-color: red;
  }

  img {
    width: 65%;
    max-width: 500px;
    margin-bottom: 20px;
  }

  iframe{
    max-height: 700px;
    margin: 20px 0;
  }

  @media(max-width: 770px) and (min-width:340px){
    height:100%;

    li{
      width:350px;
      font-size: 0.8rem;
    }

    iframe{
      width: 100%;
      max-height: 380px;
    }
    
}

@media(max-width: 900px) and (min-width:770px){
  width: 550px;

  & .description{
    width:250px;
    margin: 0;
  }

  & p{
    font-size:2rem;
  }

}

@media(max-width: 1200px) and (min-width:900px){
  width: 600px; 
}

`;
