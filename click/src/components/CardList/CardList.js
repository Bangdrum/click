import React from 'react';

import './CardList.css';
import CardItem from '../CardItem';

const CardList = props => (
    <div className='container'>
        <div className='row'>
            {props.cars.map((car, index) => (
                <CardItem key={car.id} imageClick={props.imageClick} car={car} />
            ))}
        </div>
    </div>
);

export default CardList;