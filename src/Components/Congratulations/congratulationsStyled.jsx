import styled from "styled-components";

export const Container = styled.div`


& .content {
    height:100vh;
    display: flex;
    justify-content: center;
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
  
  & .nav-buttons {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    padding: 10px;
  }
  
  & .nav-btn {
    border-radius: 50%;
    background-color: #07377A
    width: 40px;
    height: 40px;
    text-align: center;
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
  
`
