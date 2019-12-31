import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Card from './Card'

describe('Card component without props', () => {

    it('renders without crashing when passed no props', () => {
        const div = document.createElement('div');

        // will throw an error if something is wrong
        ReactDOM.render(<Card />, div);
    
        // clean up so that this doesn't effect other tests
        ReactDOM.unmountComponentAtNode(div);
    });


    it('renders the UI as expected when passed no props', () => {
        const tree = renderer
          .create(<Card />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });


});


describe('Card component WITH props', () => {

    const props = {
        key: "001",
        name: "Fuzzy",
        imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300",
        age: 5,
        description: "Lorem ipsum dolor sit amet"
    }


    it('renders without crashing when passed props', () => {
        const div = document.createElement('div');

        // will throw an error if something is wrong
        ReactDOM.render(<Card {...props} />, div);
    
        // clean up so that this doesn't effect other tests
        ReactDOM.unmountComponentAtNode(div);
    });


    it('renders the UI as expected when passed props', () => {
        const tree = renderer
          .create(<Card {...props} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

});