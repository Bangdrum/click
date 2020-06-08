import React from 'react';

import './CardItem.css';

const CardItem = props => (
    <div
        onClick={() => props.imageClick(props.car.id)}
        className='card-box col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3'
    >
        <div className='img-container'>
            <img
                title={props.car.name}
                alt={props.car.name}
                src={props.car.image}
                className='img-thumbnail'
            />
        </div>
    </div>
);

export default CardItem;