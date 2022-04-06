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
        <form
            className="flex justify-between w-full "
            onSubmit={handleSubmitTodo}
        >
            <input
                type="text"
                name="task"
                value={task}
                className="flex-1 rounded p-2 text-grey-dark mr-2"
                onChange={handleChange}
            />
            <button type="submit" aria-label="Add todo">
                <PlusIcon />
            </button>
        </form>
    );
};
