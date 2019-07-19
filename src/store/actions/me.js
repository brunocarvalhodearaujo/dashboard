/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { type Dispatch } from 'redux'
import { type User, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../types'

export function login (data: User) {
  return (dispatch: Dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
  }
}
