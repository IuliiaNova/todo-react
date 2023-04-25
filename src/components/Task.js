import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task }) => {

  const deleteWish = async (id) => {
    const res = await fetch(`http://localhost:5000/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();

    if (data.ok) {}
    
  };

  return (
    <div className="task-container">
      <div className="task-container-p">
        <p className="task-container-p-name">{task.name}</p>
        <p>{task.type}</p>
      </div>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteWish(`${task.id}`)} />
    </div>

  );
};
export default Task;