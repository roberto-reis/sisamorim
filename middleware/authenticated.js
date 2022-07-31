export default ({ redirect, app }) => {
  const loggedIn = app.$cookiz.get('token_sisamorim')

  if (!loggedIn) {
    return redirect('/login')
  }
}
