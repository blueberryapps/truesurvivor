// @flow
import Expo from 'expo'
import { observable, action } from 'mobx'
import * as firebase from 'firebase'

import {
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
  FIREBASE_API_KEY,
  FIREBASE_DOMAIN,
} from 'react-native-dotenv'

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

const app = firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_DOMAIN,
})
const auth = firebase.auth(app)

export const currentUser = observable()

auth.onAuthStateChanged(action('onAuthStateChanged', (user) => {
  currentUser.set(user)
}))

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
