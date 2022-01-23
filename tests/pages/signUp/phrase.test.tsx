import * as React from 'react'
import { shallow, mount } from 'enzyme';
import Phrase from '../../../pages/signup/phrase';
import wrapper from '../../../store'

it('should render correctly with no props', () => {
  const PhraseWrapper = wrapper.withRedux(Phrase)
  const component = mount(<PhraseWrapper/>)
  
  
  expect(component).toMatchSnapshot();
});
