import { GET_CHARACTERS } from '../actions/fetchCharacters'

export default function findCharacters( state = [], { type, payload } ) {
  switch (type) {
    case FIND_CHARACTER :
      return payload

    default :
      return state
  }
}
