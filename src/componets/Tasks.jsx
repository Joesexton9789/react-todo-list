const Task = ({ todo, handleDelete, onChange }) => {
  return (
    <>
      <input
        className="checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={e => {
          onChange({
            ...todo,
            completed: e.target.checked,
          })
        }}
      />
      {todo.title}
      <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
        <img src="../images/icon-cross.svg" alt="delete icon" />
      </button>
    </>
  )
}

export default Task
