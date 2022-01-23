import * as React from 'react'
import { shallow, mount } from 'enzyme';
import SignUp from '../../pages';
import wrapper from '../../store'

it('should render correctly with no props', () => {
  const SignUpWrapper = wrapper.withRedux(SignUp)
  const component = mount(<SignUpWrapper/>)
  
  
  expect(component).toMatchSnapshot();
});
