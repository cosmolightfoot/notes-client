import React from 'react';
import PropTypes from 'prop-types';

function Notes({ notes, pending }) {
  console.log(notes, 'NOTES');
  const notesList = notes.map((note, i) => {
    return (
      <li key={i}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
      </li>
    );
  });

  if(pending) return <h1>Loading...</h1>;

  return (
    <ul>
      {notesList}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired
};

export default Notes;
