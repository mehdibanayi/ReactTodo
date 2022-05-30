import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import todoapi from './../../Api/todos'

export default function SingleTodo(){
    const params=useParams();
    let {id}=params
    const [todo,setTodo]=useState(null)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        todoapi.get(`/todos/${id}.json`)
        .then(res=>{
            setTodo(res.data)
            setLoading(false)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <main>
            <section className="jumbotron">
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                </div>
            </section>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                       SinGle Todo  with id:  {id}
                    </div>
                    {
                        loading
                        ? <h2>Loading Data...</h2>
                        : todo && (
                        <div>
                            <h3>
                                {todo.text}
                            </h3>
                        </div>    
                        ) 
                    }
                </div>
            </div>
        </main>        
    )   
}