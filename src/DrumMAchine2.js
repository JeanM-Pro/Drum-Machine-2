import React, { useState } from 'react'
import { AudioPad } from './AudioPad'
import { samples } from './data'

export const DrumMAchine2 = () => {

    const [currentButton, setCurrentButton] =useState()


    return (
        <div className='content'>

            <div id='drum-machine'>
                
                <div className='pad-content'>

                    {samples.map(sample => <AudioPad setCurrentButton={setCurrentButton} key={sample.id} musiquita={sample}/>)}

                </div>

                <div className='display-content'>

                    <div id='display'>
                        {currentButton ? currentButton : 'Play something'}
                    </div>

                </div>
            
            </div>
        </div>
    )
}
