import FormAddTodo from './../Components/Todo/FormAddTodo';
import TodoList from './../Components/Todo/TodoList';
import todoApi from './../Api/todos';
import React ,{useEffect,useState,useContext} from 'react'
import todosContext from './../Context/todos'

export default function Home(){
    const [loading,setLoading]=useState()

    const todoContext=useContext(todosContext)

    let jsonHandler = (data)=>{
        setLoading(false)
        let todos= Object.entries(data).map(([key,value])=> {
            return{
                ...value,
                key
            }    
        })
        todoContext.dispatch({type:'init_todo',payload:{todos}})
    }

    useEffect(()=>{
        setLoading(true)
        todoApi.get(`/todos.json`)
        .then(response => jsonHandler(response.data))
        .catch(error=>console.log(error));
    },[])

    return(                                   
        <main>
            <section className="jumbotron">
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                        <FormAddTodo />
                </div>
            </section>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                    {
                        loading
                        ?
                        <h1>Loading Todos ...</h1> 
                        :
                        <TodoList />   
                    }
                    </div>
                </div>
            </div>
        </main>
    )    
}