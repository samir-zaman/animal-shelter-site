import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Animals from "./pages/Animals/Animals"
import "./server"
import AnimalDetail from './pages/Animals/AnimalDetail';
import Layout from "./components/Layout"
import Dashboard from "./pages/FosterParents/Dashboard";
import Income from "./pages/FosterParents/Income";
import Adoptees from "./pages/FosterParents/Adoptees"
import AdopteeDetails from "./pages/FosterParents/AdopteeDetails"
import Reviews from "./pages/FosterParents/Reviews";
import FosterParentLayout from './components/FosterParentLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="animals" element={<Animals />} />
            <Route path="animals/:id" element={<AnimalDetail />} />

            <Route path="foster-parent" element={<FosterParentLayout />} >
                <Route index element={<Dashboard/>} />
                <Route path="income" element={<Income />} />
                <Route path="adoptees" element={<Adoptees />} />
                <Route path="adoptees/:id" element={<AdopteeDetails />}/>
                <Route path="reviews" element={<Reviews />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);