import React from "react";
import {shallow,mount} from "enzyme";
import CoffeeList from "./coffe-list";
import config from "../../services/setupTests";
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';

const props = {
    filtered : false,
    filteredButton : "",
    filteredString : ""
};

describe('<CoffeeFilteredList render />', () => {
    it('renders correctly', () => {
        const list = mount(
                <CoffeeList {...props} />
            );
          
        expect(list.debug()).toMatchSnapshot();
        
      });

});  

describe('<CoffeeFilteredList render />', () => {
    it('renders correctly', () => {
        const list = shallow(
                <CoffeeList {...props} />
            );
          
            expect(list.state('isLoading')).toBe(true);
      });

});  