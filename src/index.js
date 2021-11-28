// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from 'react-dom';

import './scss/index.scss';

import HelloWorld from './components/HelloWorld';

render(
    <div className="container">
        <div className="grid">
            <div className="grid__col grid__col--3">
                <h3>SideBar Saebal</h3>
            </div>
            <div className="grid__col grid__col--9">
                <h3>Main Contents SKA</h3>
                <HelloWorld />
            </div>
        </div>
    </div>,
    document.getElementById('root'),
);
