import React from 'react';

// ------------------- COMPONENTS IMPORT -----------------
import MainTitle from '../../containers/MainTitle/MainTitle';
import Image from '../../components/UI/Image';
import Illustration from '../../assets/images/diberkato-ufo-686x823.jpg';

const LandingPage = () => {
    return (
        <>
            <MainTitle />
            <Image
                alternative="Illustrated person in 80's outfit."
                source={Illustration}
                imageClass=""
            />
        </>
    );
};

export default LandingPage;
