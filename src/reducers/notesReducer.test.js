import notesReducer from './notesReducer';
import {  NEW_NOTE, NEW_NOTE_PENDING } from '../actions/notesActions';

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
});
