import React from "react"
import TodoList from "./TodoList";
import Input from "./Input";

const TodoApp = () => {

    return (

            <section className={`col-12 pt-5 container d-flex flex-wrap col-lg-5 mx-auto justify-content-center align-items-cente`}>
                <Input title={`Type Your Task`}/>
                <TodoList/>
            </section>
    )
}


export default TodoApp