import { useless } from './useless.pipe';

describe('useless', () => {
  let pipe = new useless();

  it('create an instance of useless', () => {
    const pipe = new useless();
    expect(pipe).toBeTruthy();
  });

  it('transforms "useless" to "useless"', () => {
    expect(pipe.transform('start', 'middle', 'end')).toBe('start middle end');
  });
  
});