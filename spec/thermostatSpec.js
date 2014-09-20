
describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("by default", function(){
    it("starts at 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

    it('will have a power saving mode set to on', function(){
    expect(thermostat.powerSavingMode).toBe(true);
  });

});

describe("Temperature", function(){
  
  describe('when Power Saving Mode is on', function(){
    it('should have a max temp of 25 degrees', function(){
      thermostat.temperature = 25;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(25);
    });
    it('should have a maximum temperature of 25', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
      });
  });

  describe('when Power Saving Mode is off', function(){
    it('should have a max temp of 32 degrees', function(){
      thermostat.powerSavingMode = false;
      thermostat.temperature = 32;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(32);
    });
    it('should have a maximum temperature of 32 degrees', function(){
      thermostat.powerSavingMode = false;
      expect(thermostat.maximumTemperature()).toEqual(32);
    });
  });
  describe('General functionality', function(){
    it('should be able to decrease', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it('should not drop below 10 degrees', function(){
      thermostat.temperature = 10;
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    });

    it('should be able to increase', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21)
    });

    it('should be able to reset to 20 degrees', function(){
      thermostat.temperature = 22;
      thermostat.resetThermostat();
      expect(thermostat.temperature).toEqual(20)
    });

    it('should be able to reset PSM to on', function(){
      thermostat.powerSavingMode = false;
      thermostat.resetThermostat();
      expect(thermostat.powerSavingMode).toBe(true);
    }); 
    
  });
  describe("should have an energy rating", function(){
    it ('of efficient if the temperature is less than 18 degrees', function(){
      thermostat.temperature = 17;
      expect(thermostat.energyRating()).toEqual('efficient');
    });
    it ('of average if the temperature is between 18 and 25 degrees', function(){
      expect(thermostat.energyRating()).toEqual('average');
    });
    it ('of environmental tragedy if the temperature is 25 or above', function(){
      thermostat.temperature = 30;
      expect(thermostat.energyRating()).toEqual('environmental tragedy');
    });
  }); 
});