import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage';
import { UserPageLeftPannel } from '../pages/UserPageLeftPannel';
import {OpenNewAccountPage} from '../pages/OpenNewAccountPage'
import {AccountOverviewPage} from '../pages/AccountOverviewPage'
import {FundTrasnferPage} from '../pages/FundTrasnferPage'
import { BillPayPage } from '../pages/BillPayPage';
type PomFixtureType=
{
    loginPage:LoginPage;
    registerationPage:RegisterPage;
    userPageLeftPannel:UserPageLeftPannel;
    openNewAccountPage:OpenNewAccountPage;
    accountOverview:AccountOverviewPage;
    fundTransfer:FundTrasnferPage;
    billPay:BillPayPage;
    

}

export const test=baseTest.extend<PomFixtureType>({

    loginPage:async({page},use)=>{await use(new LoginPage(page))},
    registerationPage:async({page},use)=>{await use(new RegisterPage(page))},
    userPageLeftPannel:async({page},use)=>{await use(new UserPageLeftPannel(page))},
    openNewAccountPage:async({page},use)=>{await use(new OpenNewAccountPage(page))},
    accountOverview:async({page},use)=>{await use(new AccountOverviewPage(page))},
    fundTransfer:async({page},use)=>{await use(new FundTrasnferPage(page))},
    billPay:async({page},use)=>{await use(new BillPayPage(page))}

})