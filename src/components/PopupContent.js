import React from 'react';

const PopupContent = () => {
    return (
        <>
            <div className='popup'>
                <div className='popup-header'>
                    <div id='popup-title'></div>
                    <div id='popup-close'>×</div>
                    <div style={{clear: 'both'}}></div>
                </div>
                    <div id='popup-content'></div>
            </div>
        </>
        )
    }
    export default PopupContent;