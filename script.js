const duck = document.getElementById('change');

duck.addEventListener('click', function () {
  // Get all the <h1> elements on the page
  const h1Elements = document.querySelectorAll('h1');

  // Loop through each <h1> element and change its text to "duck"
  h1Elements.forEach(function (h1) {
    h1.textContent = 'duck';
  });
});

//changeTitlesToDuck();
