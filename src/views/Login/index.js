/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Login, { type Props as OwnProps } from './Login'
import { type State, type MergeMapAndDispatchProps, actions } from '../../store'

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  isAuthenticated: state.me.isAuthenticated
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  actions: bindActionCreators({
    signIn: actions.login
  }, dispatch)
})

export type WrappedComponentProps = MergeMapAndDispatchProps<
  typeof mapStateToProps,
  typeof mapDispatchToProps
>

const WrappedComponent: typeof Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default WrappedComponent
