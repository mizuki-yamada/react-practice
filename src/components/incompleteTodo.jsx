import React from "react";

export const IncompleteTodo = (props) => {
  const { todo, onClickDelete, onClickComplete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todo.map((todo, index) => {
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
  );
};
