var VegetaDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD
    this.$node = $('<img src="./images/vegeta.gif" class="vegeta dbz">')
=======
    this.$node = $('<img src="./images/vegeta.gif" class="vegeta">')
>>>>>>> 935a06846e2de616e8055c1ac0e536a7fbce4e0c
    this.setPosition(top, left);
  };
  
  VegetaDancer.prototype = Object.create(Dancer.prototype);
  VegetaDancer.prototype.constructor = VegetaDancer;