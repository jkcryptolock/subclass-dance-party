describe('buuDancer', function() {

    var buuDancer, clock;
    var timeBetweenSteps = 100;
  
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      buuDancer = new BuuDancer(10, 20, timeBetweenSteps);
    });ß
  
    it('should have a jQuery $node object', function() {
      expect(buuDancer.$node).to.be.an.instanceof(jQuery);
    });
  
  });
  