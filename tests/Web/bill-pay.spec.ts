import{test,expect} from '../../fixtures/hooks-fixtures'
import billPayData from '../../test-data/bill-pay.json'

test('TC_05 --- Pay a Bill',
  {
   tag:['@UAT','@UI','@SIT'] ,
   annotation:{type:''}
  },async({goToUrl,loginPage,userPageLeftPannel,accountOverview,billPay,logout})=>{

    await loginPage.loginParaBank(process.env.USER_NAME!,process.env.PASSWORD!)
    await userPageLeftPannel.clickOnBillPayLink();



  await billPay.billPaytoAccount(

    billPayData.payeeName,
    billPayData.payeeAddress,
    billPayData.payeeCity,
    billPayData.payeeState,
    billPayData.payeeZipCode,
    billPayData.payeePhone,
    billPayData.accountNumber,
    billPayData.verifyAdcountNumber,
    billPayData.payeeAmount,
    billPayData.fromAccount

   )

   expect(await billPay.extractBillPaymentCompleteMessage()).toContain(`$${billPayData.payeeAmount}`);



   



})