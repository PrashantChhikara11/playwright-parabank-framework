import { Locator, Page } from "@playwright/test";

export class UserPageLeftPannel
{
    readonly page:Page
    readonly openNewAccountLink:Locator;
    readonly accountsOverviewLink:Locator;
    readonly transferFundsLink:Locator;
    readonly billPayLink:Locator;
    readonly findTransactionsLink:Locator;
    readonly updateContactInfoLink:Locator;
    readonly requestLoanLink:Locator;
    readonly logoutLink:Locator;
    readonly accountOverview:Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.openNewAccountLink=page.getByRole('link', { name: 'Open New Account' });
        this.accountsOverviewLink=page.getByRole('link', { name: 'Accounts Overview' });
        this.transferFundsLink=page.getByRole('link', { name: 'Transfer Funds' });
        this.billPayLink=page.getByRole('link', { name: 'Bill Pay' });
        this.findTransactionsLink=page.getByRole('link', { name: 'Find Transactions' });
        this.updateContactInfoLink=page.getByRole('link', { name: 'Update Contact Info' });
        this.requestLoanLink=page.getByRole('link', { name: 'Request Loan' });
        this.logoutLink=page.getByRole('link', { name: 'Log Out' });
        this.accountOverview=page.getByRole('heading', { name: 'Accounts Overview' });
    }

    async logout()
    {
        await this.logoutLink.click();
    }

    async clickOnOpenNewAccountLink()
    {
        await this.openNewAccountLink.click();
    }

      async clickAccountOverview()
    {
        await this.accountOverview.click()
    }

    async clickOnTransferFunds()
    {
        await this.transferFundsLink.click();
    }

    async clickOnBillPayLink()
    {
        await this.billPayLink.click();
    }

    async isLogoutoutLinkVisible()
    {
        return await this.logoutLink.isVisible()
    }
}

