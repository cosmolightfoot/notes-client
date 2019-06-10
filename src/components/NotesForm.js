import React from 'react';
import PropTypes from 'prop-types';

function NotesForm({ title, body, onChange, onSubmit, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="title" value={title} onChange={onChange}/>
      <input name="body" value={body} onChange={onChange}/>
      <button>{submitText}</button>
    </form>
  );
}

NotesForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  submitText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

NotesForm.defaultProps = {
  submitText: 'Submit'
};

export default NotesForm;
