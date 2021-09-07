import {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import {v4 as uuid} from 'uuid';

const TodoList = () => {
    const INITIAL_STATE = [
        {text: 'test todo'}
    ]

    const [toDos, setToDos] = useState(INITIAL_STATE);

    const addToDo = (newToDo) => {
        setToDos(toDos => [...toDos, {id: uuid(), ...newToDo}]);
    }

    const removeToDo = (id) => {
        setToDos(toDos => toDos.filter(toDo => toDo.id !== id));
    }

    return (
        <div className='App-ToDos'>
            <h2>To-Do List</h2>
            <NewTodoForm add={addToDo}/>
            <ol>
                {toDos.map(({id, text}) => (
                    <li>
                        {text} <button onClick={() => removeToDo(id)}>X</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default TodoList;