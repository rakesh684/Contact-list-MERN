import React from 'react';
import {Routes,Route} from "react-router-dom"
import './App.css';
import  {Header}  from './component/navbar';
import { Home } from './component/Home';
import { Register } from './component/Register';
import { Edit } from './component/edit';
import { Details } from './component/details';
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/edit/:id" element={<Edit />} />
      <Route exact path="/view/:id" element={<Details />} />
    </Routes>
      
      
      
    </div>
  );
}

export default App;
