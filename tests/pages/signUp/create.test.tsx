import * as React from 'react'
import { shallow, mount } from 'enzyme';
import Create from '../../../pages/signup/create';
import wrapper from '../../../store'

it('should render correctly with no props', () => {
  const CreateWrapper = wrapper.withRedux(Create)
  const component = mount(<CreateWrapper/>)
  
  
  expect(component).toMatchSnapshot();
});
