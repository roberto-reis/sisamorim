export default ({ redirect, app }) => {
  const loggedIn = app.$cookiz.get('_token_sisamorim')

  if (!loggedIn) {
    return redirect('/login')
  }

  // TODO: verificar se o token é valido
}
