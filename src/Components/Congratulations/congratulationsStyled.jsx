import styled from "styled-components";

export const Container = styled.div`


& .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
  
  & div img {
    width: 40%;
    margin: 1rem;
  }
  
  & .text-box {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
  }
  
  & h3 {
    margin-top: 4rem !important;
  }
  
  & h2,h3 {
    color: #07377A;
    margin: 10px;
  }
  
  & span {
    color: #07377A;
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
  }
  
  & a {
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .containerButton{
    background-color:#07377A;
    padding:10px;
    border-radius:50%;
  }

  .nav-buttons{
    width: 20%;
    display: flex;
    justify-content: space-around;
  }

  @media(max-width: 900px) and (min-width:770px){
    & div img{
    width:80%;
    }
}

  @media(max-width: 1200px) and (min-width:900px){
    & div img{
      width:80%;
    } 
  }

  @media(max-width: 770px) and (min-width:200px){
  & div img{
    width:80%;
  }
}
`;

  
