import React from 'react';

import LinkButton from './linkbutton/LinkButton';
import './SideNav.css';

const SideNav = () => (
    <div className='sideNav'>
        <LinkButton exact link='/' color='#000000'>Home</LinkButton>
        <LinkButton link='/aboutus' color='#FE524D'>About Us</LinkButton>
        <LinkButton link='/hackathon' color='#4E96FC'>Hackathon</LinkButton>
        <LinkButton link='/timeline' color='#34AD6D'>Timeline</LinkButton>
        <LinkButton link='/speakers' color='#FFC334'>Speakers</LinkButton>
        <LinkButton link='/sponsors' color='#FE524D'>Sponsors</LinkButton>
        <LinkButton link='/contactus' color='#4E96FC'>Contact Us</LinkButton>
        <LinkButton link='/documents' color='#34AD6D'>Documents</LinkButton>
    </div>
);

export default SideNav;