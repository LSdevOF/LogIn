function Login(){
    var error = false;
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();

    // Espressione regolare per convalidare l'indirizzo email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var elemento = document.getElementById("email");

    if ((!emailRegex.test(emailValue))) {
        elemento.classList.add('error');
        changeLottie("errorLottie.json");
        error = true;
    }else {
        elemento.classList.remove('error');
    }
    var elemento = document.getElementById("password");
    
    if (error == false && ((document.getElementById('password').value).length <= 7)){
        error = true;
        elemento.classList.add('error');
        changeLottie("errorLottie.json");
    }else{
        elemento.classList.remove('error');
    }

    if (error == false){
        addLottieAnimationToElement("loadingBox","https://lottie.host/e66adb1f-981c-47f2-91ac-d03509c3a615/arQFVvh3r2.json")

    }
}

function addLottieAnimationToElement(elementId, lottiePath) {
    var container = document.getElementById(elementId);

    if (!container) {
      console.error("Element with ID '" + elementId + "' not found.");
      return;
    }

    var lottieOptions = {
      container: container,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: lottiePath,
    };

    var anim = lottie.loadAnimation(lottieOptions);
    anim.addEventListener("complete", function () {
        anim.destroy();
        changeLottie("logoLottie.json", 'Bentornato');
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
      });

      anim.play();
  }

  function changeLottie(src) {
    // Trova il container dell'animazione
    var animationContainer = document.querySelector('.animationBox');
    
    // Rimuovi l'animazione esistente
    var oldAnimation = document.getElementById('logo');
    animationContainer.removeChild(oldAnimation);
    
    var newAnimation = document.createElement('dotlottie-player');
    newAnimation.setAttribute('class', 'video');
    newAnimation.setAttribute('id', 'logo');
    newAnimation.setAttribute('src', src);
    newAnimation.setAttribute('background', 'transparent');
    newAnimation.setAttribute('speed', '1');
    newAnimation.setAttribute('loop', '');
    newAnimation.setAttribute('autoplay', '');
    animationContainer.appendChild(newAnimation);
  }
