import React from 'react';
import PropTypes from 'prop-types';

/** Example component */
function HelloWorld({message}) {
    return <div> Hello {message}</div>
}

HelloWorld.defaultProps = {
    message: 'MoEngage',
};

HelloWorld.propTypes = {
    /** Message to display */
    message: PropTypes.string,
};

export default HelloWorld;
