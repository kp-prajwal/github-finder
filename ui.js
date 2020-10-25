class UI {
  constructor() {
    this.profile = document.getElementById('profile')

  }

  showProfile(userText) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class= "row">
        <div class="col-md-3">
          <img class= "img-fluid mb-2" src="${userText.avatar_url}">
          <a href= "${userText.html_url}" target ="_blank" class="btn btn-block btn-primary"> View Profile </a>
        </div>
        <div class= "col-md-9">
          <span class = "badge badge-primary mr-2">Public Repos :${userText.public_repos}</span>
          <span class = "badge badge-secondary mr-2">Public Gists :${userText.public_gists}</span>
          <span class = "badge badge-success mr-2">Followers :${userText.followers}</span>
          <span class = "badge badge-info mr-2">Following :${userText.following}</span>

          <br><br>
          <ul class= "list-group">
          <li class= "list-group-item">Name : ${userText.name}</li>
          <li class= "list-group-item">Website/Blog : ${userText.blog}</li>
          <li class= "list-group-item">Location : ${userText.location}</li>
          <li class= "list-group-item">Member Since : ${userText.created_at}</li>
          </ul>

        </div>
      </div>

    </div>
    <h3 class = "page-heading mb-3"> Latest Repos </h3>
    <div id ="repos"></div>
    `


  }

  showRepos(repos){
    let output =''
    repos.forEach( repo => {
      output+= `
      <div class = "card card-body mb-2">
        <div class= "row">
          <div class = "col-md-6" >
            <a href = "${repo.html_url}" target = "_blank">${repo.name} </a>
          </div>
          <div class = "col-md-6" >
          <span class = "badge badge-primary mr-2"> Stars :${repo.stargazers_cound}</span>
          <span class = "badge badge-secondary mr-2">Forks :${repo.forks_count}.public_gists}</span>
          <span class = "badge badge-success mr-2">Watchers :${repo.watchers}</span>
          </div>
        </div>
      </div>
      `
    })

    document.getElementById('repos').innerHTML = output
  }

  showAlert(message, className) {
    this.clearAlert()
    const div = document.createElement('div')
    div.className = className
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.searchContainer')
    const search = document.querySelector('.search')
    container.insertBefore(div, search)
    setTimeout(() => {
      this.clearAlert()
    }, 3000);
  }

  clearAlert(){

    const alert = document.querySelector('.alert')
    if(alert){
      alert.remove()
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}