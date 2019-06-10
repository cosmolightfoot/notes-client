import { NEW_NOTE, NEW_NOTE_FULFILLED, NEW_NOTE_PENDING, NEW_NOTE_ERROR } from '../actions/notesActions';

const initialState = {
  pending: false,
  error: null,
  notes: []
};

export default function notesReducer(state = initialState, action) {
  switch(action.type) {
    case NEW_NOTE_PENDING: 
      return { ...state, pending: true };

    case NEW_NOTE:
      return { ...state, pending: false, notes: [...state.notes, action.payload] };

    case NEW_NOTE_FULFILLED: 
      return { ...state, pending: false };

    case NEW_NOTE_ERROR: 
      return { ...state, pending: false, error: action.payload };
      
    default:
      return state;
  }
}
