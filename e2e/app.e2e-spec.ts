import { Angular2DeploymentTestPage } from './app.po';

describe('angular2-deployment-test App', function() {
  let page: Angular2DeploymentTestPage;

  beforeEach(() => {
    page = new Angular2DeploymentTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
