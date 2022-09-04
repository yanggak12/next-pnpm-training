import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  contents: string;
}

const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: aliceblue;
  border-radius: 10px;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: gray;
`;
const Contents = styled.div`
  font-size: 1rem;
  font-weight: 300;
`;

const TodoItem = (props: Props) => {
  const { title, contents } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <Contents>{contents}</Contents>
    </Container>
  );
};

export default TodoItem;
