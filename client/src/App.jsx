import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/AboutUs';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';





export default function App() {
  return ( 
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about"  element={<About />} />
      <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
     
      <Route path="/project"  element={<Project />} />
      <Route path="/sign-in"  element={<Signin />} />
      <Route path="/sign-up"  element={<Signup />} /> 

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
