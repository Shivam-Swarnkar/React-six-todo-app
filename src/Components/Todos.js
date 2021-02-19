import React, { useContext } from "react";
import { REMOVE_TODO } from "../context/action.types";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaTrash } from "react-icons/fa";
import TodoContext from "../context/TodoContext";

const Todos = () => {
    const { todos, dispatch } = useContext(TodoContext)

    return (
        <ListGroup className="mt-5 mb-2 items md-6 offset-md-4">
            {todos.map(todo => {
                return (
                    <ListGroupItem key={todo.id}>
                        {todo.todoString}
                        <span className="float-right" onClick={() => {
                            dispatch(
                                {
                                    type: REMOVE_TODO,
                                    payload: todo.id
                                }
                            )
                        }}>
                            <FaTrash />
                        </span>
                    </ListGroupItem>
                )
            })}
        </ListGroup>
    )
}

export default Todos;