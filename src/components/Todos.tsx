import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Row } from "./Row";
import { AddTodo } from "./AddTodo";
import { data } from "../todos";

type Todo = {
    id: string;
    task: string;
    isCompleted: boolean;
};

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(data);
    const [task, setTask] = useState("");

    const handleAddTodo = (todo: Todo) => {
        const updatedTodo = [...todos, todo];
        setTodos(updatedTodo);
        setTask("");
    };

    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        setTask(value);
    };

    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault();
        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false,
        };
        task && handleAddTodo(todo);
    };

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id != id);
        setTodos(updatedTodos);
    };

    const handleCheckTodo = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <section>
            <AddTodo
                task={task}
                handleChange={handleChange}
                handleSubmitTodo={handleSubmitTodo}
            />

            {todos.map((todo) => (
                <Row
                    key={todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCheckTodo={handleCheckTodo}
                />
            ))}
        </section>
    );
};
