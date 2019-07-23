var BuuDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<img src="./images/buu.gif" class="buu">')
    this.setPosition(top, left);
  };
  
  BuuDancer.prototype = Object.create(Dancer.prototype);
  BuuDancer.prototype.constructor = BuuDancer;

  