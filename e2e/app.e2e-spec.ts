import { AgGridSamplePage } from './app.po';

describe('ag-grid-sample App', function() {
  let page: AgGridSamplePage;

  beforeEach(() => {
    page = new AgGridSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
