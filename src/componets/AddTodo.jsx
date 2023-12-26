import { useState } from 'react'

const AddTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('')
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleAddTodo(title)
        setTitle('')
      }}
    >
      <fieldset>
        <input
          className="todo-input"
          placeholder="Create a new todo..."
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
      </fieldset>
    </form>
  )
}

export default AddTodo
