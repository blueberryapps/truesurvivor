// @flow
import { observable, computed, action, autorun } from 'mobx'
import { Actions } from 'react-native-router-flux'
import { Font, Audio } from 'expo'

export class PreloadStore {
  @observable fontLoading = true
  @observable musicLoading = true
  @observable music = new Audio.Sound()
  @computed get loading(): boolean {
    return this.fontLoading && this.musicLoading
  }
  @action.bound async loadFonts() {
    await Font.loadAsync({
      'press-start': require('../../assets/font/PressStart2P.ttf'),
    })
    this.fontLoading = false
  }
  @action.bound async loadMusic() {
    await Audio.setIsEnabledAsync(true)
    await this.music.loadAsync(require('../../assets/sounds/true.mp3'))
    await this.music.playAsync()
    this.musicLoading = false
  }
}

export default function createStore({ authStore }) {
  const preloadStore = new PreloadStore()
  preloadStore.loadFonts()
  preloadStore.loadMusic()

  const disposeRedirect = autorun('auth redirection', () => {
    if (!authStore.isInitializing && !preloadStore.loading) {
      if (authStore.isAuthenticated) {
        Actions.menu()
        disposeRedirect()
      } else {
        Actions.auth()
      }
    }
  })

  return preloadStore
}
