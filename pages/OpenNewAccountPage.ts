import { Locator, Page } from "@playwright/test";

export class OpenNewAccountPage
{
    readonly page:Page;
    readonly accountTypeDropdown:Locator;
    readonly amountDropDown:Locator;
    readonly openNewAccountButton:Locator;
    readonly accountOpenText:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.accountTypeDropdown=page.locator('#openAccountForm #type');
        this.amountDropDown=page.locator('#openAccountForm #fromAccountId');
        this.openNewAccountButton=page.getByRole('button', { name: 'Open New Account' });
        this.accountOpenText=page.getByText('Congratulations, your account');
        //Congratulations, your account is now open.
    }

 async selectAccountTypeOption(accountType:string)
 {
   await this.accountTypeDropdown.selectOption({label:accountType})
 }
 async selectAmount(amountOption:number)
 {
    await this.amountDropDown.selectOption({index:amountOption})
    
 }
 
 async cickOnOpenNewAccountButton()
 {
    await this.openNewAccountButton.click();
 }

}
