import React , { useState } from 'react'


function EditTodo(props) {
    const [text , setText ] = useState(props.text)
    const [editLoading , setEditLoading ] = useState()
    let inputHandler = e => setText(e.target.value);
    let editHandler =e =>{
        setEditLoading(true)
        props.edit(text)
    }
    return (
        <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    <input value={text} onChange={inputHandler} className="form-control"/>
                </div>
                <div>
                {
                    editLoading
                    ? 
                    <button className={`btn btn-info mr-1`} type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Loading...</span>
                    </button>    
                    :
                    <button type="button" className="btn btn-info btn-sm mr-1" onClick={editHandler}>edit</button>                                
                 }   
                </div>
            </div>
        </div>
    )
}


export default EditTodo;