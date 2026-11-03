import { Locator, Page } from "@playwright/test";

export class FundTrasnferPage
{

    readonly page:Page;
    readonly amountInput:Locator;
    readonly fromAccountDropDown:Locator;
    readonly toAccountDropDown:Locator
    readonly transferButton:Locator;
    readonly transferMessage:Locator;
    

    constructor(page:Page)
    {
        this.page=page;
        this.amountInput=page.locator('#transferForm #amount')
        this.fromAccountDropDown=page.locator('#transferForm #fromAccountId');
        this.toAccountDropDown=page.locator('#transferForm #toAccountId');
        this.transferButton=page.getByRole('button', { name: 'Transfer' });
        this.transferMessage=page.locator('#showResult').first();


    }

    async transferAmount(amount:number,fromAccount:number,toAccount:number)
    {
        await this.amountInput.fill(String(amount));
        await this.fromAccountDropDown.selectOption({index:fromAccount});
        await this.toAccountDropDown.selectOption({index:toAccount});
        await this.transferButton.click()

    }

    async getTransferMessage()
    {
        const message= String(await this.transferMessage.allTextContents());
        return message.trim()
    }

   



}