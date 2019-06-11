import notesReducer from './notesReducer';
import {  NEW_NOTE, NEW_NOTE_PENDING, FETCH_NOTES, FETCH_NOTES_PENDING } from '../actions/notesActions';

describe('notes reducer', () => {
  it('handles the NEW_NOTES_PENDING_ACTION', () => {
    const initState = {
      pending: false,
      notes: []
    };

    const newState = notesReducer(initState, { type: NEW_NOTE_PENDING });

    expect(newState.pending).toEqual(true);
  });

  it('handles the NEW_NOTE action', () => {
    const initState = {
      pending: false,
      notes: []
    };
    const newState = notesReducer(initState, {
      type: NEW_NOTE,
      payload: {
        title: 'this is',
        body: 'a note'
      }
    });

    expect(newState.notes).toEqual([{ title: 'this is', body: 'a note' }]);
  });
  it('handles the FETCH_NOTES_PENDING_ACTION', () => {
    const initState = {
      pending: false,
      notes: []
    };

    const newState = notesReducer(initState, { type: FETCH_NOTES_PENDING });

    expect(newState.pending).toEqual(true);
  });

  it('handles the FETCH_NOTES action', () => {
    const initState = {
      pending: false,
      notes: []
    };
    const newState = notesReducer(initState, {
      type: FETCH_NOTES,
      payload: [{
        title: 'this is',
        body: 'a note'
      }]
    });

    expect(newState.notes).toEqual([{ title: 'this is', body: 'a note' }]);
  });
});
