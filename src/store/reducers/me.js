/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { combineReducers, Action } from 'redux'

function isAuthenticated (state: boolean = false, action: Action): boolean {
  switch (action.type) {
    default:
      return state
  }
}

function isFetching (state: boolean = false, action: Action): boolean {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  isAuthenticated,
  isFetching
})
