import React from 'react';

import Card from '../../components/card/Card';
import devImg from '../../img/dev.png';
import ideaImg from '../../img/idea.png';
import './Home.css'

const Home = () => (
    <div className='Home'>
        <Card src={devImg} href='#' color='#FE524D'>Registrations</Card>
        <Card src={ideaImg} href='#' color='#FE524D'>Registrations</Card>
    </div>
)

export default Home;