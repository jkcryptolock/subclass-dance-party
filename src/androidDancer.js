var AndroidDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<img src="./images/android.gif" class="android">')
    this.setPosition(top, left);
  };
  
  AndroidDancer.prototype = Object.create(Dancer.prototype);
  AndroidDancer.prototype.constructor = AndroidDancer;