import React, { useContext, useState } from "react";
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import "../App.css";
import { v4 } from "uuid";
import { ADD_TODO } from "../context/action.types";
import TodoContext from "../context/TodoContext";
const TodoForm = () => {

    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
            alert("Please enter a todo")
        }
        else{
        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("")
    }
    }

    return (
        <Form onSubmit={handleSubmit} className="md-6 offset-md-4">
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your next todo"
                        value={todoString}
                        onChange={e => { setTodoString(e.target.value) }}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="warning"
                        >ADD</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;