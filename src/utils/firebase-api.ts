const FIREBASE_ROOT_DOMAIN = 'https://jokes-ts-default-rtdb.firebaseio.com';

export interface IComment {
  id: string;
  text: string;
}

export interface IAddedComment {
  text: string;
}

export interface IJoke {
  id: string;
  topic: string;
  text: string;
}

export interface IAddedJoke {
  topic: string;
  text: string;
}

export async function getJokes() {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/jokes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Jokes fetching error.');
  }

  const convertedJokes: IJoke[] = [];

  for (const key in data) {
    const joke: IJoke = {
      id: key,
      ...data[key],
    };

    convertedJokes.push(joke);
  }

  return convertedJokes;
}

export async function getJoke(jokeId: string) {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/jokes/${jokeId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Joke fetching error.');
  }

  const convertedJoke: IJoke = {
    id: jokeId,
    ...data,
  };

  return convertedJoke;
}

export async function addJoke(jokeData: IAddedJoke) {
  const response = await fetch(`${FIREBASE_ROOT_DOMAIN}/jokes.json`, {
    method: 'POST',
    body: JSON.stringify(jokeData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Joke adding error.');
  }
}

export async function addComment(requestData: {
  jokeId: string;
  commentData: IAddedComment;
}) {
  const response = await fetch(
    `${FIREBASE_ROOT_DOMAIN}/comments/${requestData.jokeId}.json`,
    {
      method: 'POST',
      body: JSON.stringify(requestData.commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.text || 'Comment adding error.');
  }
}

export async function getComments(jokeId: string) {
  const response = await fetch(
    `${FIREBASE_ROOT_DOMAIN}/comments/${jokeId}.json`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Comments fetching error.');
  }

  const convertedComments: IComment[] = [];

  for (const key in data) {
    const comment: IComment = {
      id: key,
      ...data[key],
    };

    convertedComments.unshift(comment);
  }

  return convertedComments;
}
