  //*Day/Night mode toggle*
 const toggleButton = document.getElementById('toggle-button');
 toggleButton.addEventListener('click', function() {
     document.body.classList.toggle('night-mode');
     if (document.body.classList.contains('night-mode')) {
         toggleButton.textContent = '🌜';
     } else {
         toggleButton.textContent = '🌞';
     }