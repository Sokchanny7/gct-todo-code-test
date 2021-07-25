import React, { useEffect, useState } from 'react';
import AppConfig from '../config/app_config';
import _ from 'lodash';

const TodoPage = props => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState('Hel');

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = () => {
    const list = localStorage.getItem(AppConfig.MY_TODO_LIST_KEY);
    console.log('>list', list);
    // if (list != undefined && list.length > 0) setTodoList(list);
  };

  const handleAdd = () => {
    localStorage.setItem(AppConfig.MY_TODO_LIST_KEY, [...todoList, todoText]);
  };

  return (
    <div>
      <table>
        <thead>
          <th>
            <input type="checkbox" />
          </th>
          <th align="left">Todo</th>
        </thead>
        <tbody>
          {todoList &&
            todoList.map((item, index) => {
              <tr>
                <td>{index + 1}</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td align="left">Tov jis kong</td>
              </tr>;
            })}
        </tbody>
      </table>
      <div>
        <div>
          <input type="text" onChage={setTodoText} value={todoText} />
        </div>
        <div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
