import React from 'react'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import LoginRegister from './LoginRegister'
import Main from './Main'
import Portfolio from './Portfolio'
import InfoLanding from './InfoLanding'
import Tracker from './Tracker'
// import NearestDoctor from './NearestDoctor'
import About from './About'
// import Home from './Home'
import NearestDoctor from './NearestDoctor'
function PasswordLogin() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Main />}></Route>
                    <Route path='/register' element={<LoginRegister />}></Route>
                    <Route path='/portfolio' element={<Portfolio />}></Route>
                    <Route path='/info' element={<InfoLanding />}></Route>
                    <Route path='/tracker' element={<Tracker />}></Route>
                    <Route path='/doctor' element={<NearestDoctor />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    {/* <Route path='/home' element={<Home/>}></Route> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default PasswordLogin;