import { Angular4ServicesPage } from './app.po';

describe('angular4-services App', () => {
  let page: Angular4ServicesPage;

  beforeEach(() => {
    page = new Angular4ServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
