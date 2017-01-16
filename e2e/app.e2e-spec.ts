import { RebirthUiPage } from './app.po';

describe('rebirth-ui App', function() {
  let page: RebirthUiPage;

  beforeEach(() => {
    page = new RebirthUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
