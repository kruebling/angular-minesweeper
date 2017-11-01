import { AngularSweeperPage } from './app.po';

describe('angular-sweeper App', () => {
  let page: AngularSweeperPage;

  beforeEach(() => {
    page = new AngularSweeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
