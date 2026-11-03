import process from 'process';
import {test,expect} from '../../fixtures/hooks-fixtures'

test('TC_03 --- View Account Overview ',{
        tag:['@UI','@SIT'],
        annotation:{
                type:'FunctionalTestCase',
                description:'Check the Functionality of AccountOverviewPage and Extract all column Names'
        }
},async({goToUrl,loginPage,userPageLeftPannel,accountOverview,logout})=>{

    
        await loginPage.loginParaBank(process.env.USER_NAME!,process.env.PASSWORD!);
        await userPageLeftPannel.clickAccountOverview();
        console.log(await accountOverview.allHeadersContent())
        const totalNoOfRows=await accountOverview.accountTableRows.count()
        await accountOverview.rowViseDataExtracter(1)
        await accountOverview.extractAccountNumbers()

})