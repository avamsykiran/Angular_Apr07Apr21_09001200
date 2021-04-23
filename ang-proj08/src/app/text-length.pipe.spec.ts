import { TextLengthPipe } from './text-length.pipe';

describe('TextLengthPipe', () => {

  let pipe:TextLengthPipe=null;

  beforeEach(()=>{
    pipe = new TextLengthPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 0 for null as input', () => {
    expect(pipe.transform(null)).toEqual(0);
  });
  it('should return 5 for "Hello" as input', () => {
    expect(pipe.transform("Hello")).toEqual(5);
  });
});
