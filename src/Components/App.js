import React , { useReducer  } from 'react';

import 'bootstrap/dist/css/bootstrap.css'

// Import Components
import Header from './Layouts/Header';

// Import Routts
import Home from './../Routes/Home'
import AboutPage from './../Routes/About'
import ContactUs from './../Routes/ContactUs'
import SingleTodo from './../Routes/Todos/Single'


// Import Contexts
import TodosContext from './../Context/todos';
import AuthContext from './../Context/auth';

// Import Reducers
import AppReducer from './../Reducers/appReducer'

import {Routes,Route } from 'react-router-dom'

function App(props){
    const [state,dispatch] = useReducer(AppReducer,{
        todos:[],
        authenticated : false
    })

    return (
        <AuthContext.Provider value={{ 
            authenticated : state.authenticated,
            dispatch
        }}>
            <TodosContext.Provider value={{
                            todos:state.todos,
                            dispatch
                        }}>
                            <div className="App">
                                <Header />
                                <Routes>
                                    <Route path='/' element={<Home />} />
                                    <Route path='/about' element={<AboutPage />} />
                                    <Route path='/contact-us' element={<ContactUs />}>
                                        <Route path='form' element={<h2> Form for Contact</h2>} />      
                                        <Route path='address' element={<h2> Address for Contact</h2>} />    
                                    </Route>
                                    <Route path='/todos/:id' element={<SingleTodo />} />
                                </Routes>
                            </div>
                        </TodosContext.Provider>
        </AuthContext.Provider>   
    )
}

export default App;
