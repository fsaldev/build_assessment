import * as React from 'react'
import { shallow, mount } from 'enzyme';
import Home from '../../../pages/signup/home';
import wrapper from '../../../store'

it('should render correctly with no props', () => {
  const HomeWrapper = wrapper.withRedux(Home)
  const component = mount(<HomeWrapper/>)
  
  
  expect(component).toMatchSnapshot();
});
