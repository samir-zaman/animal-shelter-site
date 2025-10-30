import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Animals from "./pages/Animals/Animals"
import "./server"
import AnimalDetail from './pages/Animals/AnimalDetail';
import MeetUp from './pages/Animals/MeetUp';
import Donate from "./pages/Donation/Donate"
import Layout from "./components/Layout"
import Dashboard from "./pages/FosterParents/Dashboard";
import Adoptees from "./pages/FosterParents/Adoptees/Adoptees"
import AdopteeDetails from "./pages/FosterParents/Adoptees/AdopteeDetails"
import Health from "./components/AnimalDetails/Health"
import Hobbies from "./components/AnimalDetails/Hobbies"
import Bio from "./components/AnimalDetails/Bio"
import FosterParentLayout from './components/FosterParentLayout';
import Login from './pages/FosterParents/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="animals" element={<Animals />} />
            <Route path="schedule" element={<MeetUp />} />
            <Route path="animals/:id" element={<AnimalDetail />}>
                <Route index element={<Bio />}/>
                <Route path="hobbies" element={<Hobbies/>} />
            </Route>
            <Route path="donate" element={<Donate />} />

            <Route path="foster-parent" element={<Login />}>
              <Route element={<FosterParentLayout />} >
                  <Route index element={<Dashboard/>} />
                  <Route path="adoptees" element={<Adoptees />} />
                  <Route path="adoptees/:id" element={<AdopteeDetails />}>
                    <Route index element={<Health />}/>
                    <Route path="hobbies" element={<Hobbies/>} />
                  </Route>
              </Route>
            </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);