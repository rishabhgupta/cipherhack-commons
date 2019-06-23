import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Error = styled.div`
    padding-top: 45px;
    color: hotpink;
    position: relative;
    vertical-align: middle;
    margin: 0;
    left: 0;
    top: 0;
    text-align: center;
`;

const Button = styled.button`
    padding: 5px 5px;
`;

/** Used to display error within a component or a page */
const DisplayError = ({
    imgSrc, errorHeading, errorSubHeading, clickAction,
}) => (
    <div id="moe-page-loader-wrapper" className="moe-semantic" style={{ height: '300px', position: 'relative' }}>
        <div style={{
            width: '100%', margin: 'auto', top: '5%', left: '0', position: 'absolute',
        }}
        >
            <Error>
                <img src={imgSrc} alt="Error in loading" />
                <h1 style={{ fontWeight: 'bold', color: '#6f6d6d' }}>{errorHeading}</h1>
                <h4 className="m-t-10" style={{ color: '#868585' }}>{errorSubHeading}</h4>
                { clickAction && <Button type="button" className="m-t-25 btn btn-primary" onClick={clickAction}>Reload</Button> }
            </Error>
        </div>
    </div>
);

DisplayError.defaultProps = {
    clickAction: false,
};

DisplayError.propTypes = {
    /** image src link for the icon */
    imgSrc: PropTypes.string.isRequired,

    /** Main heading text */
    errorHeading: PropTypes.string.isRequired,

    /** Sub heading text */
    errorSubHeading: PropTypes.string.isRequired,

    /** Call to action */
    clickAction: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

export default DisplayError;
q
