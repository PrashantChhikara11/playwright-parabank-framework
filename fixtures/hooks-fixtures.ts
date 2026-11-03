import {test as baseTest} from '../fixtures/common-fixtures'


type HooksFixtureType={

    goToUrl:any;
    logout:any
}

export const test=baseTest.extend<HooksFixtureType>({

    goToUrl:async({loginPage}: { loginPage: import('../pages/LoginPage').LoginPage }, use: (r?: any) => Promise<void>)=>{
        await loginPage.gotoParabank();
        await use();
    },

    logout:async({userPageLeftPannel}:{userPageLeftPannel: import('../pages/UserPageLeftPannel').UserPageLeftPannel},use: (r?: any)=> Promise<void>)=>{

        await use();
        await userPageLeftPannel.logout();

    }

})

export {expect} from '@playwright/test'