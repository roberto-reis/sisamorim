export default function ({ $axios, redirect, app }) {
  const token = app.$cookiz.get('token_sisamorim')
  $axios.onRequest((config) => {
    $axios.setToken(token, 'Bearer')
    // console.log('Making request to ' + config.url)
  })

  // $axios.onError((error) => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
