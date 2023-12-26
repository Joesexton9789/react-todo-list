const Task = ({ todo, handleDelete, onChange }) => {
  return (
    <>
      <input
        id={todo.id}
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
      <label htmlFor={todo.id}>{todo.title}</label>
      <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
        <img src="../images/icon-cross.svg" alt="delete icon" />
      </button>
    </>
  )
}

export default Task
