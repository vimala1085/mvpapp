import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';

xdescribe('workspace-project App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should navigate after login', () => {
    page.navigateTo();
    expect(page.getMenuPageInfo()).toEqual('Products');
   // expect(page.getGoldTableInfo()).toEqual("1");
    
  });
  
  // it('should navigate Products', () => {
  //   page.navigateTo();
  //   expect(page.getMenuPageInfo()).toEqual('Products');
  //   expect(page.getGoldTableInfo()).toEqual("1");
    
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
