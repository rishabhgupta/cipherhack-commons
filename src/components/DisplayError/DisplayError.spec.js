import React from 'react';
import renderer from 'react-test-renderer';
import DisplayError from './DisplayError';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('hides reload button bar by default', () => {
    const tree = renderer.create(<DisplayError errorHeading="Alert" errorSubHeading="Something went wrong." imgSrc=""/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('toggles reload button when cta is passed', () => {
    const wrapper = shallow(
        <DisplayError
            errorHeading="Alert"
            errorSubHeading="Something went wrong."
            imgSrc=""
            clickAction={() => console.log('Called')}
        />
    );
    expect(wrapper.find({type: 'button'})).toHaveLength(1);
});
