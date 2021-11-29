// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from 'react-dom';

import './scss/index.scss';

import HelloWorld from './components/HelloWorld';

render(
    <div className="container">
        <div className="grid">
            <div className="grid__col grid__col--3 sidebar">
                <h3 className="order-title">Заказы:</h3>
                <div className="order-list">
                    <div className="order-list__item order">
                        <h4 className="order__client-title">Research Direct Consulting</h4>
                        <span className="order__client-phone">(828)463-9921</span>
                        <span className="order__order-type">Доставка</span>
                        <span className="order__price">Цена: <span className="order__price-span">7 579 тг.</span></span>
                    </div>
                    <div className="order-list__item order">
                        <h4 className="order__client-title">Signal Systems Virtual</h4>
                        <span className="order__client-phone">(570)211-4294</span>
                        <span className="order__order-type order__order-type--green">Забор</span>
                        <span className="order__price">Цена: <span className="order__price-span">8 449 тг.</span></span>
                    </div>
                </div>
            </div>
            <div className="grid__col grid__col--9">
                <div className="map-container">
                    123
                </div>
                <HelloWorld />
            </div>
        </div>
    </div>,
    document.getElementById('root'),
);
