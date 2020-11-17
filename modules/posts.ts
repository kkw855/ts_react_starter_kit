import { Dispatch } from 'react';
import { RootAction } from './index';
import * as postAPI from '../api/posts';

const GET_POSTS = 'GET_POSTS' as const;
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' as const;
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' as const;

const GET_POST = 'GET_POST' as const;
const GET_POST_SUCCESS = 'GET_POST_SUCCESS' as const;
const GET_POST_ERROR = 'GET_POST_ERROR' as const;

export type PostAction = {
  type:
    | typeof GET_POSTS
    | typeof GET_POSTS_SUCCESS
    | typeof GET_POSTS_ERROR
    | typeof GET_POST
    | typeof GET_POST_SUCCESS
    | typeof GET_POST_ERROR;
  posts?: postAPI.Post[];
  post?: postAPI.Post;
  error?: Error;
};

export const getPosts = async (dispatch: Dispatch<RootAction>) => {
  dispatch({ type: GET_POSTS });
  try {
    const posts = await postAPI.getPosts();
    dispatch({ type: 'GET_POSTS_SUCCESS', posts: posts });
  } catch (e) {
    dispatch({ type: 'GET_POSTS_ERROR', error: e });
  }
};

export const getPost = (id: number) => async (
  dispatch: Dispatch<RootAction>,
) => {
  dispatch({ type: GET_POST }); // 요청이 시작됨
  try {
    const post = await postAPI.getPostById(id); // API 호출
    dispatch({ type: GET_POST_SUCCESS, post }); // 성공
  } catch (e) {
    dispatch({ type: GET_POST_ERROR, error: e }); // 실패
  }
};

export type PostState = {
  posts: {
    loading: boolean;
    data: null | postAPI.Post[];
    error: null | Error;
  };
  post: {
    loading: boolean;
    data: null | postAPI.Post[];
    error: null | Error;
  };
};

const initialState: PostState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  post: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function posts(state = initialState, action: PostAction) {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.posts,
        error: null,
      };
    case 'GET_POSTS_ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    case 'GET_POST':
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case 'GET_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.post,
        error: null,
      };
    case 'GET_POST_ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}
