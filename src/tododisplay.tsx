import React from "react";
import ToDoCard from "./todo";

type Props = {
    tasks: string[];
};

const ToDoDisplay: React.FC<Props>  = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <ToDoCard key={index} task={task} />
            ))}
        </div>
    );
};

export default ToDoDisplay;