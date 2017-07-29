import { QwertyPage } from './app.po';

describe('qwerty App', () => {
  let page: QwertyPage;

  beforeEach(() => {
    page = new QwertyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
