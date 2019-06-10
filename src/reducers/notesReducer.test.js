import notesReducer from './notesReducer';
import { newNote, NEW_NOTE, NEW_NOTE_PENDING, NEW_NOTE_FULFILLED, NEW_NOTE_ERROR } from '../actions/notesActions';

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
