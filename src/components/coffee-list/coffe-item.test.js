import React from "react";
import {shallow} from "enzyme";
import CoffeeItem from "./coffe-item";
import config from "../../services/setupTests";
// import renderer from 'react-test-renderer';

const props = {
    url : "https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg",
    name : "Solimo Coffee Beans 2kg",
    country : 'Brazil',
    price : "10.73",
    id : "1"
};

describe('<CoffeeItem render />', () => {
    it('renders correctly', () => {
        const tree = shallow(<CoffeeItem {...props} />);
          
        // expect(tree).toMatchSnapshot();
        expect(tree.debug()).toMatchSnapshot();
    
        console.log(tree);
        // expect (tree.prop('name')).toEqual("Solimo Coffee Beans 2kg");
      });

      // видео 27:44
      // it('props CoffeeItem', ()=> {
      //   const tree = shallow(<CoffeeItem {...props} />);
      //   expect(tree.prop('id')).toEqual("1");
      // });
    });  
    


/*

describe('<CoffeeItem render />', () => {
it('renders correctly', () => {
    const tree = renderer
      .create(<CoffeeItem 
        url = "https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
            name = "Solimo Coffee Beans 2kg"
            country = 'Brazil'
            price = "10.73"
            id = "1" />)
      .toJSON();
    expect(tree).toMatchSnapshot();

    console.log(tree);
    // expect (tree.prop('name')).toEqual("Solimo Coffee Beans 2kg");
  });
});  

describe('Test <CoffeeItem>', () => {

    
    
    // тест на props
    it('PROPS test', () => {
        const coffeeItem  =shallow(<CoffeeItem 
            
            name = "Solimo Coffee Beans 2kg"
            country = 'Brazil'
            price = "10.73"
            id = "1"
        />);

        
        expect(coffeeItem.props().country).to.equal('Brazil!');
        });
    
      
    });

*/