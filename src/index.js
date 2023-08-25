import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewMovie from './components/ViewMovie.js';
import Main from './main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Main/>}>
      <Route  path={"/"} element={<App />}/>
      <Route path={"/viewMovie/:id"} element={<ViewMovie />} />
      </Route> 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

