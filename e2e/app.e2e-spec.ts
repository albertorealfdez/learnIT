import { ETeachPage } from './app.po';

describe('e-teach App', function() {
  let page: ETeachPage;

  beforeEach(() => {
    page = new ETeachPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
