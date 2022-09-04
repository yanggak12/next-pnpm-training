import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #797979;
  text-align: center;
  min-height: 100vh;
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem;
  color: aliceblue;
`;

const Description = styled.div`
  font-size: 1rem;
  color: lightgray;
  padding: 2rem;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  font-size: 1rem;
  font-weight: 700;
  max-width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: aliceblue;
`;

const ContentsInput = styled.textarea`
  font-size: 1rem;
  font-weight: 400;
  width: 90%;
  max-width: 700px;
  margin: 3rem auto;
  border: none;
  border-radius: 10px;
  padding: 20px 10px;
  height: 10rem;
  line-height: 140%;
  background-color: aliceblue;
`;
const Button = styled.button`
  border: none;
  padding: 1rem;
  border-radius: 10px;
  background-color: aliceblue;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const Home = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContents, setInputContents] = useState("");
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputContents(e.target.value);
  };
  return (
    <Container>
      <Title>Add To Do</Title>
      <Description>Input Title and Contents</Description>
      <InputContainer>
        <TitleInput
          value={inputTitle}
          onChange={onChangeTitle}
          placeholder={"Input Title..."}
        />

        <ContentsInput
          value={inputContents}
          onChange={onChangeContents}
          placeholder="Input Contents..."
        />
      </InputContainer>
      <Button onClick={() => alert("clicked")}>Submit</Button>
      <div style={{ borderBottom: "5px dashed aliceblue" }} />
      <Title>To Do List</Title>
      <TodoItem title="hi" contents="hello" />
    </Container>
  );
};

export default Home;
