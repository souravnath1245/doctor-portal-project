import React from 'react';
import Header from '../../components/Navlink/Header';
import AppointmentBanner from './AppointmentBanner';
import Banner from './Banner';
import Service from './Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Service />
            <AppointmentBanner/>
        </div>
    );
};

export default Home;