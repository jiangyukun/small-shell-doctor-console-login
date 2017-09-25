/**
 * Created by jiangyukun on 2017/2/14.
 */

import {get} from '../service/http'
import * as types from '../constants/types'
import * as phase from '../constants/phase'

export function login(name, pswd) {
  return dispatch => {
    dispatch({type: types.LOGIN + phase.START})

    get(`/backend/user/login/${name}/${pswd}`).then(response => {
      dispatch({type: types.LOGIN + phase.SUCCESS})
    }, err => {
      dispatch({type: types.LOGIN + phase.FAILURE, err})
    })
  }
}

export function clearFailureMessage() {
  return {
    type: types.CLEAR_LOGIN_FAILURE_MESSAGE
  }
}
