import { CharPipe } from './char.pipe';

describe('CharPipe', () => {
  let pipe: CharPipe;

  beforeEach(() => {
    pipe = new CharPipe;
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('changes chars correctly', () => {
    const expectedText = "Jestem_tutaj";
    expect(pipe.transform("Jestem tutaj")).toEqual(expectedText);
  })
});
