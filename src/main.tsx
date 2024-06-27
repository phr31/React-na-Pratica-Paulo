import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
