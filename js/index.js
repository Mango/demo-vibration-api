(function(window) {

  var hasVibration = 'vibration' in navigator;
  var container = document.getElementById('demoPayment');
  var successMsg = document.getElementById('msg-success');

  function showError() {
    container.classList.add('shake');

    if (hasVibration) {
      navigator.vibrate(200);
    }

    setTimeout(function() {
      container.classList.remove('shake');
    }, 200);
  }

  document.getElementById('df-email').addEventListener('invalid', showError);
  document.getElementById('df-amount').addEventListener('invalid', showError);

  document.getElementById('d-form').addEventListener('submit', function(eve) {
    eve.preventDefault();
    this.setAttribute('hidden', 'hidden');
    successMsg.removeAttribute('hidden');
  });

}(this));