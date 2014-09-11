(function(window) {

  var hasVibration = 'vibrate' in navigator;
  var container = document.getElementById('demoPayment');
  var successMsg = document.getElementById('msg-success');
  var email = document.getElementById('df-email');
  var amount = document.getElementById('df-amount');
  var form = document.getElementById('d-form');

  function showError() {
    container.classList.add('shake');

    if (hasVibration) {
      navigator.vibrate(200);
    }

    setTimeout(function() {
      container.classList.remove('shake');
    }, 200);
  }

  email.addEventListener('invalid', showError);
  amount.addEventListener('invalid', showError);

  form.addEventListener('submit', function(eve) {
    eve.preventDefault();
    this.setAttribute('hidden', 'hidden');
    successMsg.removeAttribute('hidden');
  });

}(this));