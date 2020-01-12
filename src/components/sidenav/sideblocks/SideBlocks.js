import React from 'react';

import './SideBlocks.css';

const Block = (props) => (
    <div>
        <div style={{backgroundColor: props.color}} className='block'></div>
    </div>
)

export default Block;