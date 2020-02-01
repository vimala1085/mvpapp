import { browser, by, element } from 'protractor';
import * as data from '../protractordata.json'
export class LoginPage
{
    navigateTo()
    {
        return browser.get(data.baseUrl) as Promise<any>;
    }
    getMenuPageInfo(){
       
      element(by.name('userName')).clear();
      element(by.name('password')).clear();

      element(by.name('userName')).sendKeys('admin');
      element(by.name('password')).sendKeys('admin');
        element(by.xpath('/html/body/app-root/div/login-app/div/form/fieldset/button[1]/span/mat-icon')).click();
//wait
//browser.sleep(12000);
browser.waitForAngular();
        return element(by.xpath('/html/body/app-root/div/app-menu/p-menubar/div/p-menubarsub/ul/li[2]/a/span[2]')).getText();
    }
    getMenuPageInfoFromExcel(userinfo){
       
        element(by.name('userName')).clear();
        element(by.name('password')).clear();
  
        element(by.name('userName')).sendKeys(userinfo.userName);
        element(by.name('password')).sendKeys(userinfo.password);
          element(by.xpath('/html/body/app-root/div/login-app/div/form/fieldset/button[1]/span/mat-icon')).click();
  //wait
  browser.sleep(4000);
  browser.waitForAngular();
          return element(by.xpath('/html/body/app-root/div/app-menu/p-menubar/div/p-menubarsub/ul/li[2]/a/span[2]')).getText();
      }
    getGoldTableInfo()
    {
        element(by.xpath('/html/body/app-root/div/app-menu/p-menubar/div/p-menubarsub/ul/li[2]/a/span[2]')).click();
        element(by.xpath('html/body/app-root/div/app-menu/p-menubar/div/p-menubarsub/ul/li[2]/p-menubarsub/ul/li[2]/a/span[2]')).click();
       browser.sleep(12000);
       //browser.waitForAngular();
        return element(by.xpath('/html/body/app-root/div/app-menu/app-product/app-gold/mat-table/mat-row[1]/mat-cell[1]')).getText();
    }
}