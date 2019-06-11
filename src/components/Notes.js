import React from 'react';
import PropTypes from 'prop-types';

function Notes({ notes }) {
  const notesList = notes.map((note, i) => {
    return (
      <li key={i}>
        <dt>{notes.title}</dt>
        <dd>{notes.body}</dd>
      </li>
    );
  });

  return (
    <ul>
      {notesList}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
