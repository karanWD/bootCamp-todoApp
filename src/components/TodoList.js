import React, {useContext, useState} from "react"
import {TodoContext} from "../contexts/TodoContextProvider";

const TodoList = () => {
    const {tasks, checkHandler, updateHandler,deleteHandler} = useContext(TodoContext)
    const [editable, setEditable] = useState(null)
    const [updatedValue, setUpdatedValue] = useState(null)
    const editHandler = (event, id) => {
        event.stopPropagation()
        setEditable(id)

    }
    const closeEditHandler = (event) => {
        event.stopPropagation()
        setUpdatedValue(null)
        setEditable(null)
    }

    return (
        tasks.length > 0 ?
            <ul className={`task-lists col-12`}>
                {
                    tasks.map(item =>
                        <li key={item.id}
                            className={`${item.checked ? `done` : ``}`}>
                            {
                                editable === item.id ?
                                    <div className={`d-flex justify-content-between align-items-center p-3 `}>
                                        <input type="text" value={updatedValue ? updatedValue : item.data} onChange={(e) => setUpdatedValue(e.target.value)}/>
                                        <span
                                            className={`text-primary`}
                                            onClick={
                                                () => {
                                                    setUpdatedValue(null)
                                                    setEditable(null)
                                                    updateHandler(item.id, updatedValue)
                                                }
                                            }
                                        >save</span>
                                        <span className={`text-secondary`} onClick={(e) => closeEditHandler(e)}>cancel</span>
                                    </div>
                                    :
                                    <div className={`d-flex justify-content-between align-items-center p-3`} onClick={(e) => checkHandler(e, item.id)}>
                                    <span className={`todo-text`}>
                                        {item.data}
                                    </span>
                                        {
                                            item.checked ?
                                                <span className={`done-text`}>
                                                Done
                                            </span>
                                                :
                                                <div>
                                                 <span className={`text-secondary`} onClick={(e) => editHandler(e, item.id)}>
                                                    Edit
                                                 </span>
                                                 <span className={`text-danger ps-3`}
                                                 onClick={(e)=>deleteHandler(e,item.id)}
                                                 >
                                                     delete
                                                 </span>
                                                </div>
                                        }

                                    </div>
                            }

                        </li>
                    )
                }
            </ul>
            :
            null
    )
}

export default TodoList