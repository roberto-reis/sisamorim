export default ({ redirect }) => {
  // const loggedIn = !!localStorage.getItem('token');
  const loggedIn = false

  if (!loggedIn) {
    return redirect('/login')
  }
}
