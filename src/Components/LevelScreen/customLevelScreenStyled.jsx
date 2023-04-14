import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content:center;

& .content {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}

& div img {
  width: 30%;
}

& h3 {
  color: #07377A;
  margin: 1rem 0 2rem 0;
}

& a{
  margin: 0 20px;
}

& p {
  color: #07377A;
  width: 35%;
  height: 300px;
  text-align: justify;
  margin-top: 2rem;
  font-size: 1.2rem;
}

& .bi {
  color: green;
  font-size: 3rem;
}

@media(max-width: 770px) and (min-width:340px){
  
 

  & div img{
    width:80%;
  }

  & p{
    width: 80%;
  }
}

`