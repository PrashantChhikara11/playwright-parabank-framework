import {test,expect} from '../../fixtures/hooks-fixtures'
import registerationData from '../../test-data/RegisterUserData.json'

test('chcek userName and Password',async({goToUrl,loginPage,userPageLeftPannel,registerationPage})=>{

await loginPage.loginParaBank(process.env.USER_NAME!,process.env.PASSWORD!)

 // wait until the login has a result: error (user not registered) OR Log Out link (user registered)
 await expect(loginPage.errorMessage.or(userPageLeftPannel.logoutLink)).toBeVisible();

 // decide on ONE thing only: is the error showing?
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