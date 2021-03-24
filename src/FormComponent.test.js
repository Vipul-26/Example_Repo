import React from 'react';
import { shallow, mount } from 'enzyme';
import FormComponent from './FormComponent.js';

 const setup = (props={}) => {
  return shallow(<FormComponent { ...props }/>)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const formComponent = findByTestAttr(wrapper, 'component-form');
  expect(formComponent.length).toBe(1);
});

test('renders component heading', () => {
  const wrapper = setup();
  const headComponent = findByTestAttr(wrapper, 'component-heading');
  expect(headComponent.length).toBe(1);
});

test('has a default value of "kilometer" selected in select 1 ', () => {
  const wrapper = setup();
  const selectValue1 = wrapper.find('select').at(0);
  expect(selectValue1.props().value).toEqual('kilometer');
});

test('has a default value of "meter" selected in select 2 ', () => {
  const wrapper = setup();
  const selectValue2 = wrapper.find('select').at(1);
  expect(selectValue2.props().value).toEqual('meter');
});

describe('toggle disable on input', () =>{
  test('disable first input field when we enter data in second input value', () => {
  const wrapper = setup();
  let inputValue2 = wrapper.find('input').at(1);
  inputValue2.simulate('change', {
    target: {value: '3070'}
  });
  inputValue2 = wrapper.find('input').at(1);
  const inputValue1 = wrapper.find('input').at(0);
  expect(inputValue2.props().value).toEqual('3070');
  expect(inputValue1.props().disabled).toBeTruthy();
  });

  // test('disable second input field when we enter data in first input value', () => {
  // const wrapper = setup();
  // let inputValue1 = wrapper.find('input').at(0);
  // console.log(inputValue1.props().value);
  // inputValue1.simulate('change', {
  //  target: {value: '101'}
  // });
  // inputValue1 = wrapper.find('input').at(0);
  // const inputValue2 = wrapper.find('input').at(1);
  // expect(inputValue1.props().value).toEqual('101');
  // expect(inputValue2.props().disabled).toBeTruthy();
  // });
})

describe('toggle selection on select', () =>{
  test('change first select field value when we select in second select field', () => {
  const wrapper = setup();
  let selectValue2 = wrapper.find('select').at(1);
  selectValue2.simulate('change', {
    target: {value: 'kilometer'}
  });
  selectValue2 = wrapper.find('select').at(1);
  const selectValue1 = wrapper.find('select').at(0);
  expect(selectValue2.props().value).toEqual('kilometer');
  expect(selectValue1.props().value).toEqual('meter');
  });

  // test('change second select field value when we select in first select field', () => {
  // const wrapper = setup();
  // let selectValue1 = wrapper.find('select').at(0);
  // selectValue1.simulate('change', {
  //  target: {value: 'meter'}
  // });
  // selectValue1 = wrapper.find('select').at(0);
  // const selectValue2 = wrapper.find('select').at(1);
  // expect(selectValue2.props().value).toEqual('meter');
  // expect(selectValue2.props().value).toEqual('kilometer');
  // });
})

test('test button', () => {
  const wrapper = setup();
  const button = wrapper.find('button');
  expect(button.length).toBe(1);
  button.simulate('submit');
});

it('calls onSubmit prop function when form is submitted', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <FormComponent onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(onSubmitSpy).toHaveBeenCalled();
});



