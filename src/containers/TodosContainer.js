import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodoContainer(){
    const todos = useSelector(state => state.todos);

    //디스패치 : store.dispatch(increase());
    const dispatch = useDispatch();
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;

}

export default TodoContainer;