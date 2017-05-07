import { AngularDataGridPage } from './app.po';

describe('angular-data-grid App', () => {
  let page: AngularDataGridPage;

  beforeEach(() => {
    page = new AngularDataGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
