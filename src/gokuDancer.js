var GokuDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD
    this.$node = $('<img src="./images/goku.gif" class="goku dbz">')
=======
    this.$node = $('<img src="./images/goku.gif" class="goku">')
>>>>>>> 935a06846e2de616e8055c1ac0e536a7fbce4e0c
    this.setPosition(top, left);
  };
  
  GokuDancer.prototype = Object.create(Dancer.prototype);
  GokuDancer.prototype.constructor = GokuDancer;