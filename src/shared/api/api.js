const route = '//centralvalleysmiles.com/wp-json'

const api = () => {
  try {
    return document.location.hostname === 'localhost' ? route : document.location.origin + '/wp-json'
  } catch (e) {
    return 'https://' + route
  }
}

export default api()
