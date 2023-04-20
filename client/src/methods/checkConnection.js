export default async () => {
  if (localStorage.getItem("jwt")) {
    fetch('http://localhost:3001/users/verifyToken', {
      headers: {
        authorization: localStorage.getItem("jwt")
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      if (json.error) window.location.replace("http://localhost:3000/connexion");
    })
  } else {
    window.location.replace("http://localhost:3000/connexion");
  }
}