var VegetaDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<img src="./images/vegeta.gif" class="vegeta dbz">')
    this.setPosition(top, left);
  };
  
  VegetaDancer.prototype = Object.create(Dancer.prototype);
  VegetaDancer.prototype.constructor = VegetaDancer;