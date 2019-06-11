import { SET_SESSION } from "../actions/sessionActions";

const initState = {
  username: '',
  token: '',
  image: ''
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_SESSION:
      return action.payload;
    default:
      return state;
  }
}


