import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() { return <h1>Home Page</h1>; }
function About() { return <h1>About Page</h1>; }
function Contact() { return <h1>Contact Page</h1>; }

export default function Heads() {
  return (
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/about">회사 소개</Link> | {" "}
          <Link to="/contact">문의하기</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>
    </BrowserRouter>
  );
}

////////////////////////////////////////////////////////////
//숙12//

import { NavLink } from 'react-router-dom';  //방법1//

const naveStyles = ({isActive}) =>( {
    color: isActive ? "#007bff" : "#333",
    textDecoration: isActive ? "none" : "underline",
    fontweight: isActive ? "bold" : "normal",
    padding: "5px 10px"
  } 
)

export function Head1() {
  return (
    <BrowserRouter>
        <nav>
          <NavLink to="/" style={naveStyles}>Home</NavLink> | {" "}
          <NavLink to="/about" style={naveStyles}>회사 소개</NavLink> | {" "}
          <NavLink to="/contact" style={naveStyles}>문의하기</NavLink>         {/*navLink는 IsActive을 받을 수 있음*/}
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>
    </BrowserRouter>
  );
}


import "./nav.css";    //방법2//

export function Head2() {
  return (
    <BrowserRouter>
        <nav>
          <NavLink to="/" >Home</NavLink> | {" "}
          <NavLink to="/about" >회사 소개</NavLink> | {" "}
          <NavLink to="/contact" >문의하기</NavLink>         {/*navLink는 IsActive을 받을 수 있음*/}
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>
    </BrowserRouter>
  );
}

//방법 3//

export function Head3() {
  return (
    <BrowserRouter>
        <nav>
          <NavLink to="/" className={({isActive}) =>(isActive ? "active" : "inactive")}>Home</NavLink> | {" "}
          <NavLink to="/about" className={({isActive}) =>(isActive ? "active" : "inactive")}>회사 소개</NavLink> | {" "}
          <NavLink to="/contact" className={({isActive}) =>(isActive ? "active" : "inactive")}>문의하기</NavLink>         {/*navLink는 IsActive을 받을 수 있음*/}
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>
    </BrowserRouter>
  );
}