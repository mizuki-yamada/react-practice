import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                {/* 仮想DOMなので、ループする場合、何番目のループなのか目印をつける必要がある */}
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
                {/* 関数に引数を渡したいときはアロー関数で当該関数を指定する必要がある */}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
