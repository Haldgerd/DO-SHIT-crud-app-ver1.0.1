import React from 'react';
import Lorna from '../assets/images/istockphoto-1338130496-170667a.jpg';
import '../assets/styles/main.scss';

const Title = () => {
    return (
        <>
            <h1>This is Webpack</h1>
            <img src={Lorna} alt="Illustrated bckground." />
        </>
    );
};

export default Title;
