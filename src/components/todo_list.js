/*
 *   Copyright (c) 2021 Sok Channy
 *   All rights reserved.
 */
import React, { useEffect, useState, useRef } from 'react';
import AppConfig from '../config/app_config';
import TodoList from '../components/todo_list';
import _ from 'lodash';
import moment from 'moment';

const TodoPage = props => {
  // const inputRef = useRef(null)
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState();
  const [editItem, setEditItem] = useState();

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = () => {
    const listObject = localStorage.getItem(AppConfig.MY_TODO_LIST_KEY);
    if (listObject != undefined) {
      setTodoList(JSON.parse(listObject));
    }
  };

  const handleAdd = () => {
    localStorage.setItem(AppConfig.MY_TODO_LIST_KEY, [
      ...todoList,
      {
        // date: moment().format('MM-DD-YY hh:mm'),
        value: todoText
      }
    ]);
  };

  return (
    <div className="content">
      <TodoList todoList={todoList} />

      <div>
        <div>
          {/* <input ref={inputRef} type="text" onChange={e=>{setTodoText(e.target.value)}} value={todoText} /> */}
        </div>
        <div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
