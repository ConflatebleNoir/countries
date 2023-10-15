import axios from 'axios';
import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Home} from "./pages/Home/Home";
import {Detail} from "./pages/Detail/Detail";
import {NotFound} from "./pages/NotFound/NotFound";

function App() {

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/detail/:name' element={<Detail/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Main>
        </>
    );
}

export default App;
