/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { combineReducers, type Action as BaseAction } from 'redux'
import {
  type User,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from '../types'

type Action = BaseAction & {
  payload?: Partial<User>,
  error?: Error
}

function data (state: Partial<User> = {}, action: Action): Partial<User> {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.payload
    default:
      return state
  }
}

function isAuthenticated (state: boolean = false, action: Action): boolean {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return true
    case USER_LOGIN_REQUEST:
    case USER_LOGIN_FAILURE:
      return false
    default:
      return state
  }
}

function isFetching (state: boolean = false, action: Action): boolean {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return true
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_FAILURE:
      return false
    default:
      return state
  }
}

export default combineReducers({
  isAuthenticated,
  isFetching,
  data
})
