import { useState } from 'react'
import './App.css'
import AddTodo from './componets/AddTodo'
import TodoList from './componets/TodoList'

let nextId = 4

function App() {
  const todosList = [
    { id: 1, title: 'Clean', completed: false },
    { id: 2, title: 'Shower', completed: false },
    { id: 3, title: 'Cook', completed: false },
  ]
  const [todo, setTodo] = useState(todosList)
  const [filter, setFilter] = useState('all')
  const [mode, setMode] = useState(true)

  const filteredList = todo.filter(t => {
    if (filter === 'all') return true
    if (filter === 'completed') return t.completed
    if (filter === 'active') return t.completed === false
  })

  const unCompletedTask = todo.filter(t => t.completed === false)

  const setFilterPick = filterChoice => setFilter(filterChoice)

  const handleAddTodo = todoItem => {
    if (todoItem === '') {
      alert('Please Enter a Todo')
      return
    }
    setTodo([...todo, { id: nextId++, title: todoItem, completed: false }])
  }

  const handleDelete = todoId => {
    const deleteTodo = todo.filter(t => {
      return t.id != todoId
    })
    setTodo(deleteTodo)
  }

  const onChange = item => {
    const change = todo.map(t => {
      if (t.id === item.id) {
        return item
      } else {
        return t
      }
    })
    setTodo(change)
  }

  const clearCompleted = () => {
    const uncompleted = todo.filter(t => {
      return t.completed === false
    })

    setTodo(uncompleted)
  }

  return (
    <div className="App" data-theme={mode === true ? 'dark' : 'light'}>
      <main className="main-content">
        <div className="container">
          <header className="main-header">
            <h1 className="main-title">Todo</h1>
            <button
              onClick={() => {
                setMode(!mode)
              }}
              className="toggle-mode"
            >
              <img
                src={
                  mode === true
                    ? '/images/icon-sun.svg'
                    : '/images/icon-moon.svg'
                }
                alt="light mode button"
              />
            </button>
          </header>
          <AddTodo handleAddTodo={handleAddTodo} />
          <TodoList
            todoList={todo}
            handleDelete={handleDelete}
            onChange={onChange}
            filteredList={filteredList}
            setFilterPick={setFilterPick}
            unCompletedTask={unCompletedTask}
            clearCompleted={clearCompleted}
            mode={mode}
          />
        </div>
      </main>
    </div>
  )
}

export default App
