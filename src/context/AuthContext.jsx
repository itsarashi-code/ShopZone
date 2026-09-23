import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function loginAsGuest() {
    setIsLoggedIn(true)
  }

  function logout() {
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loginAsGuest,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}