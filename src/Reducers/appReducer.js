function AppReducer(state,action){
    switch (action.type) {
        case 'init_todo':
            let {todos}=action.payload
            return {
                ...state, 
                todos   
            }
        case 'add_todo':
            return addTodo(state,action)
        case 'delete_todo':
            return deleteTodo(state,action)
        case 'toggle_todo':
            return toggleTodo(state,action)
        case 'edit_todo':
            return editTodo(state,action)
        case 'login_user':
            return{
                ...state,
                authenticated:true                          
            }    
        case 'logout_user':
            return{
                ...state,
                authenticated:false                          
            }    
        default:
            return state
    }
}

export default AppReducer

let addTodo = (state,action)=>{
    let {todo} = action.payload
    
    return{
        ...state,
        todos : [
            ...state.todos,
            todo
        ]                          
    }    
}

let deleteTodo = (state,action)=>{
    let {key} = action.payload
    return {
        ...state,
        todos : state.todos.filter(item => item.key !== key)
    }
}

let toggleTodo=(state,action)=>{
    let {key} = action.payload
    let item = state.todos.find(item => item.key === key);
    item.done = ! item.done ;

    let newTodos = state.todos.filter(item => item.key !== key)
    return{
        ...state,
        todos : [
            ...newTodos,
            item
        ]

    }
}

let editTodo=(state,action)=>{
    let {key,text}=action.payload
    let item = state.todos.find(item => item.key === key);
    item.text = text ;
    let newTodos = state.todos.filter(item => item.key !== key)
    return{
        ...state,
        todos : [
            ...newTodos,
            item
        ]

    }
}
// let addTodo=(text) => {

//     setTodo(prevState=>{
//         return {
//             todos : [
//                 ...prevState.todos,
//                 { key : Date.now() , done : false , text }
//             ]               
//         }
//     })
// }

// let deleteTodo=(key) =>{
//     setTodo(prevState=>{
//         return {
//             todos : prevState.todos.filter(item => item.key !== key)
//         }
//     })
// }

// let editTodo=(key , text)=> {
//     let item = todo.todos.find(item => item.key === key);
//     item.text = text ;

//     let newTodos = todo.todos.filter(item => item.key !== key)

//     setTodo({
//         todos : [
//             ...newTodos,
//             item
//         ]
//     })
// }

// let toggleTodo=(key) =>{
//     let item = todo.todos.find(item => item.key === key);
//     item.done = ! item.done ;

//     let newTodos = todo.todos.filter(item => item.key !== key)

//     setTodo({
//         todos : [
//             ...newTodos,
//             item
//         ]
//     })   
// }
