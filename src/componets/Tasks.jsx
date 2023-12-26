const Task = ({ todo, handleDelete, onChange, mode }) => {
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
      <label htmlFor={todo.id}>
        {todo.completed === true ? (
          <s
            style={
              mode === true
                ? { color: 'hsl(233, 14%, 35%)' }
                : { color: 'hsl(233, 11%, 70%)' }
            }
          >
            {todo.title}
          </s>
        ) : (
          todo.title
        )}
      </label>
      <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
        <img src="../images/icon-cross.svg" alt="delete icon" />
      </button>
    </>
  )
}

export default Task
