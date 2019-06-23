import React from 'react';
import DisplayError from 'moengage/DisplayError';

/** With call to action  */
export default function Example10Percent() {
    return (
        <DisplayError
            imgSrc="http://app-cdn.moengage.com/images/campaign-error.png"
            errorHeading="Problem with Campaign!"
            errorSubHeading={`Please contact MoEngage team.`}
            clickAction={() => {console.log('Clicked')}}
        />
    )
}
