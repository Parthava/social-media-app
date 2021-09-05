import { 
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL } from '../constants/postConstants'

import axios from 'axios'

export const createPost = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/post/create`, { post }, config)

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: POST_CREATE_FAIL,
      payload: message,
    })
  }
}