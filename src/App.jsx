import React, { createContext, useEffect, useState } from 'react'
import Approuter from './Approuter'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import app from './components/firebase';
import { getAuth } from 'firebase/auth';
import { ModalsProvider } from '@mantine/modals';
import { getDatabase, onValue, ref } from 'firebase/database';
import { userTypeUpdate } from './zustand/UserTypeUpdate';
const auth = getAuth(app)
const UserAuth = createContext()
function App() {
  const db = getDatabase(app)
  // user signed in authentication using firebase
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [useremail, setUserEmail] = useState('')
  const [userid, setUserid] = useState(null)
  const { updateUsertype, fetchUserTypeUpdate } = userTypeUpdate()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserid(user.uid)
        setIsAuthenticated(true)
        setUserEmail(user.email)
        // fetchUserTypeUpdate(user.uid, db)
        onValue(ref(db, `users/${user.uid}/usertypeupdate`), (snapshot) => {
          const user_type_update = snapshot.val()
          if (user_type_update !== null) {
            if (user_type_update.usertype) {
              updateUsertype(true)
            } else {
              updateUsertype(false)
            }
          } else {
            updateUsertype(false)
          }
        })

      } else {
        setIsAuthenticated(false)
        setUserid(null)
        setUserEmail('')
      }
    })
  }, [])

  // dark color scheme
  const [colorScheme, setColorScheme] = useLocalStorage(
    {
      key: 'mantine-color-scheme',
      defaultValue: 'light',
      getInitialValueInEffect: true,
    }
  )
  const toggleColorScheme = () => {
    if (colorScheme === 'dark') {
      setColorScheme('light')
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      setColorScheme('dark')
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }
  useHotkeys([['mod+J', () => toggleColorScheme()]])
  return (
    <>
      <UserAuth.Provider value={{ isAuthenticated, useremail, userid }}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            <ModalsProvider>
              <Approuter />
            </ModalsProvider>
          </MantineProvider >
        </ColorSchemeProvider>
      </UserAuth.Provider>
    </>
  )
}

export default App
export { UserAuth }