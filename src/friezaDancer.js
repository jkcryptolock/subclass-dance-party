var FriezaDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<img src="./images/frieza.gif" class="frieza">')
    this.setPosition(top, left);
  };
  
  FriezaDancer.prototype = Object.create(Dancer.prototype);
  FriezaDancer.prototype.constructor = FriezaDancer;