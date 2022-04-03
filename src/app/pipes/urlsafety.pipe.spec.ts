import { UrlsafetyPipe } from './urlsafety.pipe';

describe('UrlsafetyPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlsafetyPipe();
    expect(pipe).toBeTruthy();
  });
});
