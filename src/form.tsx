import React, {useState} from "react";

interface Props {
    addTask: (task: string) => void; 
}

const Form: React.FC<Props> = ({ addTask }) => {
    const[input, setInput] = useState<string>("");


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!input) return;
    addTask(input);
    setInput('');
};

return (
    <form onSubmit={handleSubmit}>
    <input 
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)} 
    />
    <button type="submit">Add Task</button>
    </form>
);
};

export default Form;