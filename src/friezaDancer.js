var FriezaDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD
    this.$node = $('<img src="./images/frieza.gif" class="frieza dbz">')
=======
    this.$node = $('<img src="./images/frieza.gif" class="frieza">')
>>>>>>> 935a06846e2de616e8055c1ac0e536a7fbce4e0c
    this.setPosition(top, left);
  };
  
  FriezaDancer.prototype = Object.create(Dancer.prototype);
  FriezaDancer.prototype.constructor = FriezaDancer;