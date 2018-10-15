import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import * as api from "lib/api";

const CHANGE_INPUT = "search/CHANGE_INPUT";
const INIT_SELECTED_DATA = "search/INIT_SELECTED_DATA";
// 선택된 SELECTED_DATA를 초기화 해준다.
// 영화 검색 결과를 보고 창 닫기를 누를때 사용한다.

const GET_MOVIE_NAME_PENDING = "search/GET_MOVIE_NAME_PENDING";
const GET_MOVIE_NAME_SUCCESS = "search/GET_MOVIE_NAME_SUCCESS";
const GET_MOVIE_NAME_FAILURE = "search/GET_MOVIE_NAME_FAILURE";

const GET_MOVIE_ID_PENDING = "search/GET_MOVIE_ID_PENDING";
const GET_MOVIE_ID_SUCCESS = "search/GET_MOVIE_ID_SUCCESS";
const GET_MOVIE_ID_FAILURE = "search/GET_MOVIE_ID_FAILURE";

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const initSelectedData = createAction(INIT_SELECTED_DATA);

export const getMovieName = name => dispatch => {
  dispatch({ type: GET_MOVIE_NAME_PENDING });
  return api
    .getMovieFromName(name)
    .then(data => {
      dispatch({
        type: GET_MOVIE_NAME_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MOVIE_NAME_FAILURE,
        payload: err
      });
      throw err;
    });
};

export const getMovieId = id => dispatch => {
  dispatch({ type: GET_MOVIE_ID_PENDING });
  return api
    .getMovieFromID(id)
    .then(data => {
      dispatch({ type: GET_MOVIE_ID_SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({
        type: GET_MOVIE_ID_FAILURE,
        payload: err
      });
      throw err;
    });
};

const initialState = {
  input: "",
  pending: false,
  error: false,
  data: null,
  selectedData: null
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => {
      return produce(state, draft => {
        draft.input = action.payload;
      });
    },
    [INIT_SELECTED_DATA]: (state, action) => {
      return produce(state, draft => {
        draft.selectedData = null;
      });
    },
    [GET_MOVIE_NAME_PENDING]: (state, action) => {
      return produce(state, draft => {
        draft.pending = true;
        draft.error = false;
      });
    },
    [GET_MOVIE_NAME_SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.pending = false;
        draft.data = action.payload.data.results;
      });
    },
    [GET_MOVIE_NAME_FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.pending = false;
        draft.error = true;
      });
    },
    [GET_MOVIE_ID_PENDING]: (state, action) => {
      return produce(state, draft => {
        draft.pending = true;
        draft.error = false;
      });
    },
    [GET_MOVIE_ID_SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.pending = false;
        draft.selectedData = action.payload.data;
      });
    }
  },
  initialState
);
