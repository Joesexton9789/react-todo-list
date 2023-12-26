import Task from './Tasks'
import { useState } from 'react'

function TodoList({
  todoList,
  handleDelete,
  onChange,
  filteredList,
  setFilterPick,
  unCompletedTask,
  clearCompleted,
  mode,
}) {
  const [active, setActive] = useState('all')
  return (
    <>
      <section className="todo-list">
        <ul>
          {filteredList.map(todo => {
            return (
              <li key={todo.id} className="list-item">
                <Task
                  todo={todo}
                  handleDelete={handleDelete}
                  onChange={onChange}
                  mode={mode}
                />
              </li>
            )
          })}
        </ul>
        <div className="filter-section">
          <p className="items-left">{unCompletedTask.length} items left</p>
          <div className="filters">
            <button
              id="all"
              onClick={() => {
                setFilterPick('all')
                setActive('all')
              }}
              className={
                active === 'all' ? 'filter-btns active' : 'filter-btns'
              }
            >
              All
            </button>
            <button
              id="active"
              onClick={() => {
                setFilterPick('active')
                setActive('active')
              }}
              className={
                active === 'active' ? 'filter-btns active' : 'filter-btns'
              }
            >
              Active
            </button>
            <button
              id="completed"
              onClick={() => {
                setFilterPick('completed')
                setActive('completed')
              }}
              className={
                active === 'completed' ? 'filter-btns active' : 'filter-btns'
              }
            >
              Completed
            </button>
          </div>

          <button
            onClick={clearCompleted}
            className="filter-btns clear-complete-btn"
          >
            Clear Completed
          </button>
        </div>
      </section>
      {/* <div className="filter-section">
        <p className="items-left">{unCompletedTask.length} items left</p>
        <div className="filters">
          <button
            id="all"
            onClick={() => {
              setFilterPick('all')
              setActive('all')
            }}
            className={active === 'all' ? 'filter-btns active' : 'filter-btns'}
          >
            All
          </button>
          <button
            id="active"
            onClick={() => {
              setFilterPick('active')
              setActive('active')
            }}
            className={
              active === 'active' ? 'filter-btns active' : 'filter-btns'
            }
          >
            Active
          </button>
          <button
            id="completed"
            onClick={() => {
              setFilterPick('completed')
              setActive('completed')
            }}
            className={
              active === 'completed' ? 'filter-btns active' : 'filter-btns'
            }
          >
            Completed
          </button>
        </div>

        <button onClick={clearCompleted} className="filter-btns">
          Clear Completed
        </button>
      </div> */}
    </>
  )
}

export default TodoList
