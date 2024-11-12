document
  .getElementById('visitPxlPro')
  .addEventListener('click', function (event) {
    event.preventDefault();
    console.log('fake link to pixlPro');
  });

document.getElementById('signin').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Would potentially open modal to signin');
});
