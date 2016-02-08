import { SAMPLE_ACTION, SAMPLE_SUCCESS, SAMPLE_FAILURE } from '../actions/index.ts';

let initialState = {
  sampleText: 'void'
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, {
        sampleText: action.text
      });

    case SAMPLE_SUCCESS:
      return Object.assign({}, state, {
        sampleText: action.text
      });

    case SAMPLE_FAILURE:
      return Object.assign({}, state, {
        sampleText: action.text
      });

    default:
      return state;
  }

};

export default appReducer;
