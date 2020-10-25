// initialise github
const github = new Github;
// init UI
const ui = new UI;
// search input

const searchUser = document.getElementById('searchUser')

// search input event listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value

  if (userText !== '') {
    // make http call

    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User not found','alert alert-danger')
        } else {
          // Show profile data
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
      })
  } else {
    ui.clearProfile()
    // Clear all profiles
  }
})