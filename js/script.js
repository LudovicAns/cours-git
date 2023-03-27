const result = confirm("Êtes-vous sûr d'être vivant :o ?");

if (result) {
  document.title = "Hello vivant";
} else {
  document.title = "Salut le zombie"
}