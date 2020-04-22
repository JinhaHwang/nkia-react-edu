import React from 'react';

const Display = (props) => {
    // jsx
    return (
        <div>
            {props.msg || '기본값'}
        </div>
    );
};

export default Display;


