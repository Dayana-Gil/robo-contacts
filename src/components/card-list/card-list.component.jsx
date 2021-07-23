import React from 'react';

import { Card } from '../card/ card.component';

import './card-list.style.css';

export const CardList = props => (

    <div className = 'card-list'>
        { 
            props.list.map( list => (
                <Card key={list.id} list={list} />
            ))
        }  
    </div>
);