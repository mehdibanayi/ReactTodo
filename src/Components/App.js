import React , { useReducer  } from 'react';

import 'bootstrap/dist/css/bootstrap.css'

// Import Components
import Header from './Layouts/Header';

// Import Routts
import Home from './../Routes/Home'
import AboutPage from './../Routes/About'
import ContactUs from './../Routes/ContactUs'

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
                                    <Route path='/contact-us' element={<ContactUs />} />
                                </Routes>
                            </div>
                        </TodosContext.Provider>
        </AuthContext.Provider>   
    )
}

export default App;
