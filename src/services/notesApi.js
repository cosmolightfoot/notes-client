export const createNote = note => {
  return Promise.resolve({
    id: '12345',
    ...note
  });
};
