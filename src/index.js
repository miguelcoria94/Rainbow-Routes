import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Rainbow from './components/Rainbow';

const Root = () => (
    <BrowserRouter>
        <Rainbow />
    </BrowserRouter>
)

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root />,
        document.getElementById("root")
    )
})
