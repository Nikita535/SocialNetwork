import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
    return (
        /*********************************************************************************************
         *! React Router — это стандартная библиотека для маршрутизации в React. Он обеспечивает навигацию 
         *! между представлениями различных компонентов в приложении React, позволяет изменять URL-адрес 
         * браузера и поддерживает синхронизацию пользовательского интерфейса с URL-адресом.
         *******************************************************************************************/
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'              /**
                                                                * ! звёздочка в конце пути - это разрешение к изменению url для других изменений))) (NavLink)
                                                                */
                            element={ <Dialogs store={props.store} />} />

                        <Route path='/profile'
                            element={ <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch} />} />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;