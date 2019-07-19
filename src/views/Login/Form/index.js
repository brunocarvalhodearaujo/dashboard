/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { withFormik } from 'formik'
import * as yup from 'yup'
import Form, { type Values } from './Form'

const WrappedComponent: typeof Form = withFormik({
  mapPropsToValues: (props: { data: Partial<Values> }) => ({
    email: props.data.email || '',
    password: props.data.password || ''
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required(),
    password: yup
      .string()
      .max(13, 'Too long')
      .min(8, 'Too short')
      .required('Password is Required.')
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values)
    setSubmitting(false)
  },
  displayName: 'Form',
  validateOnChange: true,
  validateOnBlur: true,
  enableReinitialize: true,
  isInitialValid: true
})(Form)

export default WrappedComponent
