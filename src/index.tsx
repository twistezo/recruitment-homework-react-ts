import React, { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { API_URL } from 'constants/'
import 'styles/index.scss'

const apiClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
})

const AppContainer = (): ReactElement => (
  <ApolloProvider client={apiClient}>
    <App />
  </ApolloProvider>
)

const container = document.getElementById('root')
if (container) createRoot(container).render(<AppContainer />)
