import {test,expect} from '../../fixtures/hooks-fixtures'
import fundTransferData from '../../test-data/fund-transfer-data.json'

test('TC_04 --- Transfer Funds Between Accounts',{
    tag:['@UI','@SIT'],
    annotation:{
        type:'TransferFundPage',
        description:'Test Transfer of funds from added accounts'
    }
},async({goToUrl,loginPage,userPageLeftPannel,accountOverview,fundTransfer,logout})=>{



    await loginPage.loginParaBank(process.env.USER_NAME!,process.env.PASSWORD!)
    await userPageLeftPannel.clickOnTransferFunds();
    await fundTransfer.transferAmount(fundTransferData.amount,fundTransferData.fromAccount,fundTransferData.toAccount)
    expect(await fundTransfer.getTransferMessage()).toContain('Transfer Complete!')


})