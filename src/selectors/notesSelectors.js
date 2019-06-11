export const getNotesState = (state) => state.notes;
export const getNotesSelector = (state) => getNotesState(state).notes;
export const getNotesPending = (state) => getNotesState(state).pending;
