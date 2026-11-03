import { Locator, Page } from "@playwright/test";

export class BillPayPage
{

    readonly page:Page;
    readonly payeeNameInput:Locator;
    readonly addressInput:Locator;
    readonly cityInput:Locator;
    readonly stateInput:Locator;
    readonly zipcodeInput:Locator;
    readonly phoneInput:Locator;
    readonly accountNumberInput:Locator;
    readonly verifyAccountNumberInput:Locator;
    readonly amountInput:Locator;
    readonly fromAccountDropDown:Locator;
    readonly sendPaymentButton:Locator;
    readonly billPaymentCompleteMessage:Locator;



    constructor(page:Page)
    {
        this.page=page;        
        this.payeeNameInput=page.locator('input[name="payee.name"]');
        this.addressInput=page.locator('input[name="payee.address.street"]');
        this.cityInput=page.locator('input[name="payee.address.city"]');
        this.stateInput=page.locator('input[name="payee.address.state"]');
        this.zipcodeInput=page.locator('input[name="payee.address.zipCode"]');
        this.phoneInput=page.locator('input[name="payee.phoneNumber"]');
        this.accountNumberInput=page.locator('input[name="payee.accountNumber"]');
        this.verifyAccountNumberInput=page.locator('input[name="verifyAccount"]');
        this.amountInput=page.locator('input[name="amount"]');
        this.fromAccountDropDown=page.locator('select[name="fromAccountId"]');
        this.sendPaymentButton=page.getByRole('button', { name: 'Send Payment' });  
       // this.billPaymentCompleteMessage=page.locator('#billpayResult p');   
       this.billPaymentCompleteMessage=page.locator('#billpayResult span')
         
    }

    async billPaytoAccount(
        payeeName:string,
        address:string,
        city:string,
        state:string,
        zipcode:string,
        phone:string,
        accountNo:string,
        verifyAccountNo:string,
        amount:string,
        fromAccount:number
    )
    {

        await this.payeeNameInput.fill(payeeName);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.zipcodeInput.fill(zipcode);
        await this.phoneInput.fill(phone);
        await this.accountNumberInput.fill(accountNo);
        await this.verifyAccountNumberInput.fill(verifyAccountNo);
        await this.amountInput.fill(amount);
        await this.fromAccountDropDown.selectOption({index:fromAccount})
        await this.sendPaymentButton.click();

    }

    async extractBillPaymentCompleteMessage():Promise<string[]>
    {
        await this.billPaymentCompleteMessage.first().waitFor(); 
        return this.billPaymentCompleteMessage.allTextContents()
    }

}