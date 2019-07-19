/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React, { Component, type ReactNode } from 'react'
import PropTypes from 'prop-types'
import { FormikState } from 'formik'
import { Button } from '../../../components'

export type Values = {
  email: string,
  password: string
}

type Props = {
  data: Values,
  onSubmit: (data: Values) => Promise<void>,
  children: ReactNode
}

export default class Form extends Component<Props & FormikState<Values>> {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder='Nome de usuário'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name='email'
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </div>
        <div>
          <input
            placeholder='Senha'
            type='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name='password'
          />
          {errors.password && touched.password && <p>{errors.password}</p>}
        </div>
        <Button disabled={isSubmitting || Object.keys(errors).length > 0} type='submit'>
          Entrar
        </Button>
      </form>
    )
  }
}
