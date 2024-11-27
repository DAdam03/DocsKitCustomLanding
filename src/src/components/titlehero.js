import React from 'react';
import './titlehero.css';

const TitleHero = (props) => (
    <div className='titleHero'>
        <img src={props.src} alt={props.alt}/>
        <h1>{props.title}</h1>
    </div>
);

export default TitleHero;


