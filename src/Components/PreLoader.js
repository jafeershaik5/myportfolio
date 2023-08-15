import React from 'react';
import preimg from '../images/preloader.svg';

const PreLoader = () => {
    return (
        <div className='preloader flex'>
            <img src={preimg} />
        </div>
    );
};

export default PreLoader;