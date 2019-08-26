import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { useStateValue } from "../StateHelper/TodoState";

const Background = styled.div``;

const Folder = styled.div`
  background: #ececec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-left: 2rem;
  }
`;

const TodoWrapper = styled.ul`
  ${props => !props.isOpened && `display: none;`}
`;

export default function TodoList() {
  const { state, isLoading } = useStateValue();
  const [isOpened, setIsOpened] = useState(true);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const makeTodoList = data => {
    const todoList = data.map((todo, idx) => {
      return <TodoItem key={todo.id} idx={idx} todo={todo} />;
    });

    return todoList;
  };

  return (
    <Background>
      <Folder>
        <h3>Todos</h3>
        <button onClick={handleClick}>Toggle</button>
      </Folder>

      <TodoWrapper isOpened={isOpened}>
        {isLoading && <li>로딩중...</li>}
        {!isLoading && makeTodoList(state.todos)}
      </TodoWrapper>
    </Background>
  );
}
