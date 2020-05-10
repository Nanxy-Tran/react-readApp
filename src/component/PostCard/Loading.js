import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';

export default function Loading() {
    const [position, setPosition] = useState(0);
        
    const handleScroll = () => {
        setPosition((Math.round(window.scrollY)/document.body.scrollHeight)*100);
    }
    
    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);
        return () =>  window.addEventListener('scroll', handleScroll);   
    })
    return (
        <div > 
            hello form dark side
        </div>
    )
}
