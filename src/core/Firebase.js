// @flow
import * as firebase from 'firebase'
import cuid from 'cuid'

import {
  FIREBASE_API_KEY,
  FIREBASE_DOMAIN,
  FIREBASE_DATABASE,
} from 'react-native-dotenv'

export const firebaseApp = firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_DOMAIN,
  databaseURL: FIREBASE_DATABASE,
})

const databaseRef = firebaseApp.database().ref()
const charactersRef = databaseRef.child('characters')
const lobbyRef = databaseRef.child('lobby')

export async function findCharacter(chid) {
  const snapshot = await charactersRef.child(chid).once('value')
  return snapshot.val()
}

export function createCharacter(characterData: Object) {
  return charactersRef.child(characterData.chid).set(characterData)
}

export async function enterLobby(chid: string) {
  const lobbySnapshot = await lobbyRef
    .orderByValue()
    .equalTo(chid)
    .limitToFirst(1)
    .once('value')

  if (lobbySnapshot.exists()) {
    const [lobbyId] = Object.keys(lobbySnapshot.val())
    return lobbyId
  }
  const enteredLobbyRef = await lobbyRef.push(chid)
  return enteredLobbyRef.key
}

export function leaveLobby(lobbyId) {
  lobbyRef.child(lobbyId).remove()
}
