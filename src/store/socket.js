/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { type Action, Store } from 'redux'
import { type State } from './reducers'

export type Options = {
  debug?: boolean
}

export function createSocketMiddleware (options: Options = {}) {
  return ({ dispatch, getState }: Store<State>) => (next: (action: Action) => void) => (action: Action) => {
    if (options.debug) {
      console.log('------------')
      console.log('Store', getState())
      console.log(' triggered:', action)
      console.log('------------')
    }

    action = {
      ...action,
      socket: () => ({})
    }

    return next(action)
  }
}
