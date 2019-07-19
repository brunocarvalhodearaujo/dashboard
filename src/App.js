import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from './store'
import { Login, Overview } from './views'

export default function App () {
  const store = configureStore()

  return (
    <ReduxProvider store={store}>
      <Login>
        <Overview />
      </Login>
    </ReduxProvider>
  )
}
