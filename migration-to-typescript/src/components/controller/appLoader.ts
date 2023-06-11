import Loader from './loader'

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'e468a836826b42c29b5d1f74a624da3c',
    })
  }
}

export default AppLoader
