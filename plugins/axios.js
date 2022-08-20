export default function ({ $axios, redirect, app }) {
  $axios.onRequest((config) => {
    const token = app.$cookiz.get('_token_sisamorim')
    if (token) {
      $axios.setToken(token, 'Bearer')
    }
    // console.log('Making request to ' + config.url)
  })

  // $axios.onError((error) => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
