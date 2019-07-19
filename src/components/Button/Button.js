/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { type ComponentType, type CSSProperties } from 'react'
import styled from 'styled-components'

type Props = {
  type?: 'submit' | 'button',
  disabled?: boolean,
  className?: string,
  style?: CSSProperties,
  onClick: () => void
}

const Button: ComponentType<Props> = styled.button`
  border: 1px solid rgba(27,31,35,.2);
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  padding: 3px 6px;
  background-color: #ffffff;
`

Button.propTypes = {}

Button.defaultProps = {}

export default Button
