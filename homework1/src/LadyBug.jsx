import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() { return <h1>Home Page</h1>; }
function About() { return <h1>About Page</h1>; }
function Contact() { return <h1>Contact Page</h1>; }

// 파일의 주인공은 Heads 하나여야 합니다.
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
