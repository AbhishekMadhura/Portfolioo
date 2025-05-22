'use client';

import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
    return (
        <TypeAnimation
            sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'Composer',
                2000,
                'Musician',
                2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-3xl font-bold "
        />
    );
};

export default TypeWriter;