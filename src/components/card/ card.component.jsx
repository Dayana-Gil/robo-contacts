import React from 'react';

import './card.style.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="list" src={'https://robohash.org/' + props.list.id + '?set=set2&size=180x180'} />
        <h2> {props.list.name} </h2>
        <p> {props.list.email} </p> 
    </div>
);