import { 
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	PROFILE_UPDATE_REQUEST,
	PROFILE_UPDATE_SUCCESS,
	PROFILE_UPDATE_FAIL } from '../constants/userConstants'


import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST
		})

		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}

		const { data } = await axios.post('/api/users/login', 
			{ email, password, config })

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('userInfo', JSON.stringify(data))

	}

	catch (error) {
		dispatch ({
			type: USER_LOGIN_FAIL,
			payload: error.response && error.response.data.message ? 
			error.response.data.message :
			error.message,
		})
	}
}

export const logout = () => (dispatch) => {
	localStorage.removeItem('userInfo')
	dispatch({
		type: USER_LOGOUT
	})
}

export const register = (firstname, lastname, email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST
		})

		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}

		const { data } = await axios.post('/api/users/register', 
			{ firstname, lastname, email, password }, config)

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data
		})

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('userInfo', JSON.stringify(data))

	}

	catch (error) {
		dispatch ({
			type: USER_REGISTER_FAIL,
			payload: error.response && error.response.data.message ? 
			error.response.data.message :
			error.message,
		})
	}
}

export const updateProfile = (firstname, lastname) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROFILE_UPDATE_REQUEST,
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

    const { data } = await axios.put('/api/users/profile', { firstname, lastname }, config)

    dispatch({
      type: PROFILE_UPDATE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: PROFILE_UPDATE_FAIL,
      payload: message,
    })
  }
}
