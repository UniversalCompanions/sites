// Προσθέτουμε μια λειτουργία για το κουμπί που θα εμφανίζει ένα animation
function animateButton() {
  var button = document.querySelector('.btn');
  button.style.animation = 'bounce 0.5s ease';
  setTimeout(function() {
    button.style.animation = '';
  }, 500);
}
