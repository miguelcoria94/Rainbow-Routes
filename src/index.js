import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const Root = () => (
    <BrowserRouter>
        
    </BrowserRouter>
)

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root />,
        document.getElementById("root")
    )
})
