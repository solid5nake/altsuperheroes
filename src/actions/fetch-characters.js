import marvelApi from '../marvel-api'
import findCharacter from './find-character'

export const GET_CHARACTERS = 'GET_CHARACTERS'

export default function fetchCharacters() {
  return dispatch => {
    dispatch(findCharacter())

    marvel.characters.findAll(5)
      .then(console.log)
      .fail(console.error)
      .done();
  }
}


function getCharacters(characters) {
  return {
    type: GET_CHARACTERS,
    payload: characters.data,
  }
}
