import React from 'react';
import Typewriter from 'typewriter-effect';

function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    'Web Developer',
                    'Front-End Developer'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default TypeWriter;