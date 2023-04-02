import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

& .content {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
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

`