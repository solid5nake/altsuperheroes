import React, { Component, PropTypes } from 'react'
import fetchCharacters from '../actions/fetch-characters'
import findCharacter from '../actions/find-character'

class SuperHeroes extends Component {

  componentDidMount() {
    this.props.fetchCharacters()
  }

  findCharacter() {
    this.props.findCharacter({})
  }


  render() {
    const { characters } = this.props

    return (
      <div>
        <h1>Characters</h1>
         console.log()
      </div>

    )
  }
}

export default Superheroes
