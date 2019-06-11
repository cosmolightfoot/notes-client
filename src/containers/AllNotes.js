import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/notesActions';
import { getNotesSelector, getNotesPending } from '../selectors/notesSelectors';
import Notes from '../components/Notes';

class AllNotes extends PureComponent {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    pending: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <Notes notes={this.props.notes} pending={this.props.pending} />;
  }
}

const mapStateToProps = state => ({
  pending: getNotesPending(state),
  notes: getNotesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);

