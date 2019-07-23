var BuuDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD
    this.$node = $('<img src="./images/buu.gif" class="buu dbz">')
=======
    this.$node = $('<img src="./images/buu.gif" class="buu">')
>>>>>>> 935a06846e2de616e8055c1ac0e536a7fbce4e0c
    this.setPosition(top, left);
  };
  
  BuuDancer.prototype = Object.create(Dancer.prototype);
  BuuDancer.prototype.constructor = BuuDancer;

  