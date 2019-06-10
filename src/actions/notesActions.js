import { createAction } from 'promise-middleware-redux';
import { createNote } from '../services/notesApi';


export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING,
  NEW_NOTE_FULFILLED,
  NEW_NOTE_ERROR
] = createAction('NEW_NOTE', createNote);



