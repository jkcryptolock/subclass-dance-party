var GokuDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<img src="./images/goku.gif" class="goku">')
    this.setPosition(top, left);
  };
  
  GokuDancer.prototype = Object.create(Dancer.prototype);
  GokuDancer.prototype.constructor = GokuDancer;