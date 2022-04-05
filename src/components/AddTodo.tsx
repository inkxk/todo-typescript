import React, { ChangeEvent, FormEvent } from "react";
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg";

type AddTodoProps = {
    task: string;
    handleChange: (e: ChangeEvent) => void;
    handleSubmitTodo: (e: FormEvent) => void;
};

export const AddTodo = ({
    task,
    handleChange,
    handleSubmitTodo,
}: AddTodoProps) => {
    return (
        <form onSubmit={handleSubmitTodo}>
            <input type="text" name="task" value={task} onChange={handleChange} />
            <button type="submit" aria-label="Add todo">
                <PlusIcon />
            </button>
        </form>
    );
};
