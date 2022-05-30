import React , { useState , useContext } from 'react'
import EditTodo from './EditTodo';
import TodosContext from '../../Context/todos';
import todoApi from './../../Api/todos';
import { Link } from 'react-router-dom'

function Todo(props) {
    const { item } = props;
    const [ edit , setEdit ] = useState();
    const [ btnloading , setBtnloading ] = useState();
    const todosContext = useContext(TodosContext);
    
    let editHandler = text => {
        todoApi.put(`/todos/${item.key}.json`,{done:item.done,text})
            .then(response=>{
                todosContext.dispatch({type:'edit_todo',payload:{key:item.key,text}})
                setEdit(false);
            })
            .catch(err=>console.log(err))
        
    }

    let doneHandler = e =>{
        setBtnloading(true)
        todoApi.put(`/todos/${item.key}.json`,{done:!item.done,text:item.text})
        .then(response=>{
            setBtnloading(false)
            todosContext.dispatch({type:'toggle_todo',payload:{key:item.key}})
        })
        .catch(err=>console.log(err))        
    }

    let deleteHandler = e =>{
        setBtnloading(true)
        todoApi.delete(`/todos/${item.key}.json`)
            .then(response=>{
                setBtnloading(false)
                todosContext.dispatch({type:'delete_todo' , payload:{key:item.key}})
            })
            .catch(error=>console.log(error))       
    }

    return (
        <>
            {
                ! edit
                    ? (
                        <div className="col-6 mb-2">
                            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                <Link to={`/todos/${item.key}`}>
                                    {item.text}
                                </Link>
                                <div>
                                    {
                                        btnloading
                                        ? 
                                        <button className={`btn ${ !item.done ? 'btn-success' : 'btn-warning'} mr-1`} type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span className="sr-only">Loading...</span>
                                        </button>    
                                        :
                                        <button type="button" className={`btn btn-sm mr-1 ${ !item.done ? 'btn-success' : 'btn-warning'}`} onClick={doneHandler}>{ item.done ? 'undone' : 'done'}</button>
                                    }
                                    {
                                        btnloading
                                        ? 
                                        <button className={`btn btn-info mr-1`} type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span className="sr-only">Loading...</span>
                                        </button>    
                                        :
                                        <button type="button" className="btn btn-info btn-sm mr-1" onClick={() => setEdit(true)}>edit</button>
                                    }
                                    {
                                        btnloading
                                        ? 
                                        <button className={`btn btn-danger mr-1`} type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span className="sr-only">Loading...</span>
                                        </button>    
                                        :
                                        <button type="button" className="btn btn-danger btn-sm" onClick={deleteHandler}>delete</button>
                                    }
                                </div>
                            </div>
                        </div>
                    )  
                    : <EditTodo text={item.text} edit={editHandler}/> 
            }
        </>
    )
}



export default Todo;