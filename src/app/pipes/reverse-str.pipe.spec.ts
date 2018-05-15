import { ReverseStrPipe } from './reverse-str.pipe';

describe('ReverseStrPipe', () => {
  let pipe = new ReverseStrPipe();

  it('create an instance of ReverseStrPipe', () => {
    const pipe = new ReverseStrPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "cba"', () => {
    expect(pipe.transform('abc')).toBe('cba');
  });
  
});