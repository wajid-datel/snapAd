import { SelfserviceV2Page } from './app.po';

describe('selfservice-v2 App', () => {
  let page: SelfserviceV2Page;

  beforeEach(() => {
    page = new SelfserviceV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
