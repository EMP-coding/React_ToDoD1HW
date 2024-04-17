type Props = {
    task: string;
};

const ToDoCard: React.FC<Props> = ({ task }) => {
    return(
        <div>
            <p>{task}</p>
        </div>
    );
};

export default ToDoCard