import React from 'react';
import Superheroes from './containers/Superheroes'

class App extends React.Component {

    render() {
        const { characters } = this.props
        return (
            <div>
                <h1>Heroes box</h1>
                <SuperHeroes />
            </div>
        );
    }
}

export default App;
