import * as React from 'react'
import { shallow, mount } from 'enzyme';
import Secure from '../../../pages/signup/secure';
import wrapper from '../../../store'

it('should render correctly with no props', () => {
  const SecureWrapper = wrapper.withRedux(Secure)
  const component = mount(<SecureWrapper/>)
  
  
  expect(component).toMatchSnapshot();
});
