export default ({ redirect }) => {
  // const loggedIn = !!localStorage.getItem('token');
  const loggedIn = true

  if (!loggedIn) {
    return redirect('/login')
  }
}
