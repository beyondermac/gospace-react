import React from 'react';

const Whisky = ({ whisky }) => (
    <div>
        <img alt='' style={{ width: '300px', height: '300px' }} src={whisky.imageUrl} />
        <h3>{whisky.title}</h3>
    </div>
);

export default Whisky;