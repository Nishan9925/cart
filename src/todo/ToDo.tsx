import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./todoStore";
import { addToDo, removeToDo, toggleToDo } from "./todoSlice";

function ToDoList () {
    const [newToDo, setNewToDo] = useState("");
    const todos = useSelector((state: RootState) => state.todosReducer.todos);
    const dispatch: AppDispatch = useDispatch();

    const handleAddToDo = () => {
        if (newToDo.trim()) {
            dispatch(addToDo(newToDo));
            setNewToDo("");
        }
    };

    const handleToggleToDo = (id: number) => {
        dispatch(toggleToDo(id));
    };

    const handleRemoveToDo = (id: number) => {
        dispatch(removeToDo(id));
    };

    return (
        <>
            <div>
                <input
                    value={newToDo}
                    onChange={(e) => setNewToDo(e.target.value)}
                />
                <button onClick={handleAddToDo}>Add ToDo</button>
                <ul style={{textDecoration: "none"}}>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleToDo(todo.id)}
                                />
                                <span style={{textDecoration: todo.completed ? "line-through" : "none" }}>
                                    {todo.text}
                                </span>
                                <button onClick={() => handleRemoveToDo(todo.id)}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default ToDoList;