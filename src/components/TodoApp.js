import React, {useState} from "react"
import TodoList from "./TodoList";
import Input from "./Input";
import {v4 as uuidv4} from "uuid"

const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const addHandler = (value) => {
        if (value.length > 0) {
            const item = {
                id: uuidv4(),
                text: value,
            }
            setTasks([...tasks, item])
        }
    }
    const checkHandler = (event, id) => {
        event.stopPropagation()
        tasks.filter(item => item.id === id)[0].checked = !tasks.filter(item => item.id === id)[0].checked
        setTasks([...tasks])
    }
    const updateHandler = (id, value) => {
        tasks.filter(item => item.id === id)[0].text = value
        console.table(id, value, tasks)
        setTasks(tasks)
    }
    const deleteHandler = (event, id) => {
        event.stopPropagation()
        const deleted = tasks.filter(item => item.id !== id)
        setTasks(deleted)
    }

    return (

        <section className={`col-12 pt-5 container d-flex flex-wrap col-lg-5 mx-auto justify-content-center align-items-center`}>
            <Input
                addHandler={addHandler}
                title={`Type Your Task`}
            />
            <TodoList
                tasks={tasks}
                checkHandler={checkHandler}
                updateHandler={updateHandler}
                deleteHandler={deleteHandler}
            />
        </section>
    )

}


export default TodoApp