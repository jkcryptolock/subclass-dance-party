var AndroidDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD
    this.$node = $('<img src="./images/android.gif" class="android dbz">')
=======
    this.$node = $('<img src="./images/android.gif" class="android">')
>>>>>>> 935a06846e2de616e8055c1ac0e536a7fbce4e0c
    this.setPosition(top, left);
  };
  
  AndroidDancer.prototype = Object.create(Dancer.prototype);
  AndroidDancer.prototype.constructor = AndroidDancer;