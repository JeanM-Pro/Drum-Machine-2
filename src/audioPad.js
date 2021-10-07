import React from 'react'
import { samples } from './data'

export const AudioPad = (props) => {

    window.addEventListener('keydown', (event)=> {
        if(event.keyCode === props.musiquita.keyCode){ 
            reproducir()
            props.setCurrentButton(props.musiquita.id)
        }
    })

    const reproducir = (num) => {

        const audio = document.getElementById(props.musiquita.keyTrigger)
        audio.currentTime=0
        audio.play()

    }



    
    return (
        <button className="drum-pad" 
        id={props.musiquita.id} 
        data-key={props.musiquita.keyCode} 
        onClick={() =>{
            reproducir()
                props.setCurrentButton(props.musiquita.id)
    }} >
            {props.musiquita.keyTrigger}
            <audio className='clip' id={props.musiquita.keyTrigger} data-key={props.musiquita.keyCode} src={props.musiquita.url}/>
        </button>
    )
}
