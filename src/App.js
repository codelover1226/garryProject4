import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Wrapper } from './components/Wrapper';
import Header from './components/Header';
import Landingpage from './pages/landingpage/Landingpage'

export default function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <div className="w-screen bg-[#F4F5F7] absolute " style={{ overscrollBehavior: 'contain' }}>
          <div className="max-w-[1600px] mx-auto md:rounded-2xl bg-white h-[100svh] inset-0 shadow-xl  overflow-x-hidden overflow-y-hidden relative">
              <Routes>
                <Route path="/buy" exact element= {<Landingpage />}/>
                <Route path="/sell" exact element= {<Landingpage />}/>
                <Route path="/rent" exact element= {<Landingpage />}/>
                <Route path="/" exact element= {<Landingpage />}/>
              </Routes>
          </div>
        </div>       
      </Wrapper>
    </BrowserRouter>
  )
}