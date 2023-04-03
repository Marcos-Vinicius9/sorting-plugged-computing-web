import styled from "styled-components";


export const Card = styled.div`
background-color: #F2C824;
  border-radius: 10px;
  width: 80%;
  height: 20%;
  margin: 1rem;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & .description{
    width: 300px;
    margin: 0;
  }

  & .level a {
  display: flex;
  justify-content: center;
  color: #07377A;
  align-items: center;
  gap: 8%;
  text-decoration: none;
  text-align: start;
}

& .level a img {
  width: 20%;
}

& .arrow{
    font-size: 60px; 
}

@media(max-width: 770px) and (min-width:340px){
  width: 330px;

  & .description{
    width:150px;
    margin: 0;
  }

  & p{
    font-size:1.5rem;
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

`