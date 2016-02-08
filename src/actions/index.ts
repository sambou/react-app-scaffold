export const SAMPLE_ACTION  = 'SAMPLE_ACTION';

export const SAMPLE_ASYNC   = 'SAMPLE_ASYNC';
export const SAMPLE_SUCCESS = 'SAMPLE_SUCCESS';
export const SAMPLE_FAILURE = 'SAMPLE_FAILURE';

interface GitHubAPIResponse {
  login: string,
};

type AsyncAction<T> = (dispatch: (a: Action) => void, getState: () => any) => Promise<T>;

export function changeAsyncSampleText(text): AsyncAction<GitHubAPIResponse> {
  return (dispatch, getState) => {

    dispatch(changeSampleText('LOADING...'));

    let p = fetch(`https://api.github.com/users?since=${Math.floor(Math.random() * 1000)}`);

    return p
      .then(
        (res): Promise<GitHubAPIResponse> => res.json(),
        e => dispatch(changeSampleText(e))
      )
      .then(
        users => {
          dispatch(changeSampleText(users[0].login));
          return users;
        }
      );
  };
}

export function changeSampleText(text) {
  return {type: SAMPLE_ACTION, text};
}
