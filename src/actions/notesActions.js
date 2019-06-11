import { createAction } from 'promise-middleware-redux';
import { createNote, getNotes } from '../services/notesApi';


export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING,
  NEW_NOTE_FULFILLED,
  NEW_NOTE_ERROR
] = createAction('NEW_NOTE', createNote);

export const [
  fetchNotes,
  FETCH_NOTES,
  FETCH_NOTES_PENDING,
  FETCH_NOTES_FULFILLED,
  FETCH_NOTES_ERROR
] = createAction('FETCH_NOTES', getNotes);

