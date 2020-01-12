import React from 'react';

import { Link } from 'react-router-dom';
import './SideNavLinks.css';

const SideNavLinks = (props) => (
    <div>
        <Link className='sidenavlinks' to={props.link} exact={props.exact}>{props.children}</Link>
    </div>
)

export default SideNavLinks;