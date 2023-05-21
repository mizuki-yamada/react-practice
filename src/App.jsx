import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodo } from "./components/incompleteTodo";
import { CompleteTodo } from "./components/completeTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    //新しいTODOを追加するときの処理
    if (todoText === "") {
      //TODOが空文字なら何も返さず、TODOに追加しない
      return;
    }
    //すでにある未完了TODO（初期値は空の配列）に入力されたTODOを追加
    const newTodos = [...incompleteTodos, todoText];
    //最新のTODOにセット
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    //TODOを削除したいときの処理
    const newTodos = [...incompleteTodos];
    //index番目のTODOを削除
    newTodos.splice(index, 1);
    //最新のTODOにセット
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    //タスクを完了した時の処理
    const newIncompleteTodos = [...incompleteTodos];
    //index番目のTODOを削除
    newIncompleteTodos.splice(index, 1);

    //完了したTODO（初期値は空の配列）を、配列の末尾にセット
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //最新のTODOにセット
    setIncompleteTodos(newIncompleteTodos);
    //最新の完了タスクを更新
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    //完了したタスクを未完了に戻したい時の処理
    const newCompleteTodos = [...completeTodos];
    //index番目のタスクを完了タスク配列から削除
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
        // incompleteTodosが5個以上かどうかでT/Fをpropsに渡す
      ></InputTodo>

      {incompleteTodos.length >= 5 && <p>登録できるtodoは5個までです</p>}

      <IncompleteTodo
        todo={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      ></IncompleteTodo>

      <CompleteTodo
        completeTodo={completeTodos}
        onClickBack={onClickBack}
      ></CompleteTodo>
    </>
  );
};
