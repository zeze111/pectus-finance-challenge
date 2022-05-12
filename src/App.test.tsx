import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './components/Navbar';

test('It renders the App', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Navbar).exists).toBeTruthy();
})
