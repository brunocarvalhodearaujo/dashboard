/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { createStore, applyMiddleware, Middleware } from 'redux'
import thunk from 'redux-thunk'
import reducers, { type State } from './reducers'

const baseURL: string = ''

export const enhancer: Middleware[] = [
  thunk.withExtraArgument(baseURL)
]

export function configureStore (initialState?: State = {}) {
  return createStore(reducers, initialState, applyMiddleware(...enhancer))
}

export * from './actions'
export * from './reducers'
