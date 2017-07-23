import { observable } from 'mobx'
import { AppState } from 'react-native'

const appState = observable(AppState.currentState)

AppState.addEventListener('change', change => appState.set(change))

export default appState
