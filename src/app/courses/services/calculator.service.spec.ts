import {CalculatorService} from "./calculator.service";
import {LoggerService} from "./logger.service";
import {TestBed} from "@angular/core/testing";

describe('CalculatorService', () => {

  let calculator: CalculatorService = undefined, loggerSpy: any;

  beforeEach(() => {

    console.log('Calling before each');

    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });

    calculator = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {

    console.log('add test');

    const result = calculator.add(15, 20);

    expect(result).toBe(35);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  })

  it('should subtract two numbers', () => {

    console.log('subtract test');

    const result = calculator.subtract(20, 15);

    expect(result).toBe(5);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  })
})
