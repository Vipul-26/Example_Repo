import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';

 const setup = (props={}) => {
  return mount(<App { ...props }/>)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});





