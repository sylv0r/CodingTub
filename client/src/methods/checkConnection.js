export default async () => {
  if (!localStorage.getItem("user_id")) window.location.replace("/connexion")
}