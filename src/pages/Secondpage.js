import Header from '../components/Header'
import React, { useEffect, useState, useRef } from 'react';
import { Test } from '../components/Test';

export default function Secondpage() {
    const [isWingToggled, setIsWing] = useState(false);
    const [isCountWingToggled, setIsCountWing] = useState(false);
    const [isFloorToggled, setIsFloor] = useState(false);
    const [isHundredToggled, setIsHundred] = useState(false);
    const [isFlatsToggled, setIsFlat] = useState(false);

    // Function to handle toggle for Wing button
    const handleWing = () => {
        setIsWing(prevState => !prevState);
        
        setIsCountWing(false);
        setIsFloor(false);
        setIsHundred(false);
        setIsFlat(false);
    }

    // Function to handle toggle for Count of Wing button
    const handleCountWing = () => {
        setIsCountWing(prevState => !prevState);
        
        setIsWing(false);
        setIsFloor(false);
        setIsHundred(false);
        setIsFlat(false);
    }

    // Function to handle toggle for Count of Wing button
    const handleFloor = () => {
        setIsFloor(prevState => !prevState);
        
        setIsWing(false);
        setIsCountWing(false);
        setIsHundred(false);
        setIsFlat(false);
    }

    // Function to handle toggle for Count of Wing button
    const handleHundred = () => {
        setIsHundred(prevState => !prevState);
        
        setIsWing(false);
        setIsFloor(false);
        setIsCountWing(false);
        setIsFlat(false);
    }

    // Function to handle toggle for Count of Wing button
    const handleFlat = () => {
        setIsFlat(prevState => !prevState);
        
        setIsWing(false);
        setIsFloor(false);
        setIsHundred(false);
        setIsCountWing(false);
    }

    return (
        <div className='Secondpage'>
            <button onClick={handleWing} className={isWingToggled ? "active" : ""}>Wing</button>
            <button onClick={handleCountWing} className={isCountWingToggled ? "active" : ""}>Count Wing</button>
            <button onClick={handleFloor} className={isFloorToggled ? "active" : ""}>Floor</button>
            <button onClick={handleHundred} className={isHundredToggled ? "active" : ""}>Hundred</button>
            <button onClick={handleFlat} className={isFlatsToggled ? "active" : ""}>Flats</button>
        </div>
    )
}