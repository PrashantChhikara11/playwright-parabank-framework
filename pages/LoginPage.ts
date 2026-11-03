import { expect, Locator, Page } from "@playwright/test";

export class LoginPage
{

    readonly page:Page; 
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly registerPage:Locator;
    readonly credentialsError:Locator;
    readonly errorMessage:Locator;
    readonly internalErrorMessage:Locator

    constructor(page:Page)
    {

        this.page=page;
        this.userNameInput=page.locator('input[name="username"]')
        this.passwordInput=page.locator('input[name="password"]')
        this.loginButton=page.getByRole('button', { name: 'Log In' })
        this.registerPage=page.getByRole('link', { name: 'Register' })
        this.credentialsError=page.getByText('The username and password could not be verified')
        this.errorMessage=page.getByText('The username and password could not be verified.')
        this.internalErrorMessage=page.getByText('An internal error has occurred and has been logged.')
    }


    async gotoParabank()
    {
        await this.page.goto("https://parabank.parasoft.com/parabank/register.htm")
    }

    async loginParaBank(userName:string,password:string)
    {
        
        await this.userNameInput.fill(userName);
        await expect(this.userNameInput).toHaveValue(userName)
        await this.passwordInput.fill(password);
        await expect(this.passwordInput).toHaveValue(password)
        await this.loginButton.click();
       
    }

    async clickRegisterPage()
    {
        await this.registerPage.click();
    }

    async loginErrorMessage()
    {
        return await this.errorMessage.innerText();
    }

    async isErrorMessageAppeared()
    {
        return await this.errorMessage.isVisible();
     
    }
}