import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import './heroimage.css'


export default function HeroImage(props) {
    
    /*
    let scrollAmount = window.scrollY/600;
    this.style.setProperty("--my-var", scrollAmount);
    */
    return (
    <div className="heroImageContainer">
        <StaticImage src="../images/flexibility.jpg" alt="flexibility" className="heroImage"/>
        <h1 className="heroTitle">{props.children}</h1>
    </div>
    );
};