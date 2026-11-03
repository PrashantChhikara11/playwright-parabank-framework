import {test,expect} from '../../fixtures/hooks-fixtures'
import registerationData from '../../test-data/RegisterUserData.json'
import newAccountData from '../../test-data/new-account-data.json'


test.describe.serial('add new account',()=>{

test('TC01 Registeration TestCase',async({goToUrl,loginPage,userPageLeftPannel,registerationPage})=>{

    await test.step('Checking if user Logins and if not we need register it again',async()=>{
        await loginPage.loginParaBank(process.env.USER_NAME!,process.env.PASSWORD!)
    })


 // wait until the login has a result: error (user not registered) OR Log Out link (user registered) OR internal error (site down)
 // .first(): when the site is down ParaBank can show "Log Out" AND the internal error together

  await test.step('Script will wait until the login has a result: error (user not registered) OR Log Out link (user registered) OR internal error (site down)',async()=>{
    await expect(loginPage.errorMessage.or(userPageLeftPannel.logoutLink).or(loginPage.internalErrorMessage).first()).toBeVisible();
  })
 
  // site is down: stop here, so every test that depends on data-setup is skipped
 await test.step('If site is down throw error',async()=>{
    if(await loginPage.internalErrorMessage.isVisible())
    throw new Error('ParaBank site is down. Please try again after some time.');
 })
 
 

 // decide on ONE thing only: is the error showing?

  await test.step('Registering User',async()=>{

     if(await loginPage.isErrorMessageAppeared())
 {
    await loginPage.gotoParabank();    // already opens register.htm, no need to click Register
    await registerationPage.userRegistration(

        registerationData.firstName,
        registerationData.lastName,
        registerationData.address,
        registerationData.city,
        registerationData.state,
        registerationData.phone,
        registerationData.zipCode,
        registerationData.ssn,
        registerationData.username,
        registerationData.password,
        registerationData.confirm


    );
    
    await expect(registerationPage.welcomeMessage).toHaveText(`${registerationData.welcomeMessage} ${registerationData.username}`)
 }

 else
    console.log('User already registered, skipping registration');
  })


    
})

test('TC_04 --- Open a New Savings Bank Account',async({goToUrl,loginPage,userPageLeftPannel,openNewAccountPage,logout})=>{

     
    await loginPage.loginParaBank(process.env.USER_NAME!,process.env.PASSWORD!)
    await userPageLeftPannel.clickOnOpenNewAccountLink();
    await openNewAccountPage.selectAccountTypeOption(newAccountData.account_type_savings);
    await openNewAccountPage.selectAmount(newAccountData.amount_index);
    await openNewAccountPage.cickOnOpenNewAccountButton();
    await expect(openNewAccountPage.accountOpenText).toHaveText(newAccountData.account_open_message)


})
test('TC_4.2 --- Open a New Checking Bank Account',async({goToUrl,loginPage,userPageLeftPannel,openNewAccountPage,logout})=>{

   
    await loginPage.loginParaBank(process.env.USER_NAME!,process.env.PASSWORD!)
    await userPageLeftPannel.clickOnOpenNewAccountLink();
    await openNewAccountPage.selectAccountTypeOption(newAccountData.account_type_checking);
    await openNewAccountPage.selectAmount(newAccountData.amount_index);
    await openNewAccountPage.cickOnOpenNewAccountButton();
    await expect(openNewAccountPage.accountOpenText).toHaveText(newAccountData.account_open_message)


})

})