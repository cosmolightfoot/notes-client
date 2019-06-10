import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotesForm from '../components/NotesForm';
import { newNote } from '../actions/notesActions';
import { connect } from 'react-redux';

class CreateNote extends PureComponent {
  static propTypes = {
    createNote: PropTypes.func.isRequired
  };

  state = {
    title: '',
    body: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.createNote({ title, body });
    this.setState({ title: '', body: '' });
  }

  render() {
    const { title, body } = this.state;
    return (
      <NotesForm title={title} body={body} onChange={this.handleChange} onSubmit={this.handleSubmit} submitText="Create Note"/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNote(note) {
    dispatch(newNote(note));
  }
});

export default connect(
  null, 
  mapDispatchToProps
)(CreateNote);




