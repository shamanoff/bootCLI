import { BootCLIPage } from './app.po';

describe('boot-cli App', function() {
  let page: BootCLIPage;

  beforeEach(() => {
    page = new BootCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
