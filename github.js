class Github {
  constructor() {
    this.client_id = 'cc2398f670631628e6b7'
    this.client_secret = "be5acaacce102ccf03df2c58ed501cad1f7cee39"
    this.repos_count = 5
    this.repos_sort = 'created : asc'
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort = ${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}