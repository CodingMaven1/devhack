import React from 'react';

import SideNavLinks from '../sidenavlinks/SideNavLinks';
import SideBlocks from '../sideblocks/SideBlocks';
import './LinkButton.css';

const LinkButton = (props) => (
    <div className='LinkButton'>
        <SideBlocks color={props.color} />
        <div style={{marginLeft: '1rem'}}>
            <SideNavLinks link={props.link} exact={props.exact}>{props.children}</SideNavLinks>
        </div>
    </div>
)

export default LinkButton;