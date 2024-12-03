import { Component } from "react";
import { createRoot } from "react-dom/client";
import { React } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Show from "./pages/Show";
import Add from "./pages/Add";
import Home from "./pages/Home";
export const BASE_URL = 'http://127.0.0.1:8000/';
class App extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Add" element={<Add />} />
                    <Route path="/Show" element={<Show />} />
                    {/* <Route path="/Edit:id" element={<h1>edit</h1>} /> */}
                </Routes>
            </HashRouter>)
    }
}
const root = createRoot(document.getElementById('app'));
root.render(<App />)