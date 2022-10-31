/* eslint-disable react/react-in-jsx-scope */
import { AuthTabs, ForgotPasswordPage, ResetPasswordPage } from '@pages/auth'
import { useRoutes } from 'react-router-dom'

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPasswordPage />
    },
    {
      path: '/reset-password',
      element: <ResetPasswordPage />
    }
  ])

  return elements
}
