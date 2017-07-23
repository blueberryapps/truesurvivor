// @flow
import Expo from 'expo'
import { observable, action } from 'mobx'
import * as firebase from 'firebase'
import { firebaseApp } from './Firebase'

import {
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
} from 'react-native-dotenv'

export const currentUser = observable()

const auth = firebase.auth(firebaseApp)
auth.onAuthStateChanged(action('onAuthStateChanged', (user) => {
  currentUser.set(user)
}))

async function signInWithGoogle(): Promise<string | null> {
  try {
    const { type, idToken } = await Expo.Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    })

    return type === 'success' ? idToken : null
  } catch (error) {
    console.log('GOOGLE AUTH ERROR')
    console.error(error)
    return null
  }
}

export default async function signInToFirebase() {
  const token = await signInWithGoogle()
  if (token === null) {
    throw new Error('cancelled')
  }
  const credential = firebase.auth.GoogleAuthProvider.credential(token)
  return auth.signInWithCredential(credential).catch((error) => {
    console.log('failed to sign in with Firebase')
    console.error(error)
  })
}

export function signOut() {
  auth.signOut()
}
