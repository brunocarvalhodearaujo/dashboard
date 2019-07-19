/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React, { Component, type ReactNode, Children } from 'react'
import PropTypes from 'prop-types'
import { type WrappedComponentProps } from './index'
import Form from './Form'

export type Props = {
  isAuthenticated: boolean,
  children: ReactNode
}

export default class Login extends Component<Props & WrappedComponentProps> {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    children: PropTypes.element.isRequired
  }

  render () {
    const { isAuthenticated, children, actions } = this.props

    if (!isAuthenticated) {
      return (
        <Form
          data={{ email: 'brunocarvalhodearaujo@gmail.com', password: '12345678' }}
          onSubmit={actions.signIn}
        />
      )
    }

    return Children.only(children)
  }
}
