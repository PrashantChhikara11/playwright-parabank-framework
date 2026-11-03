import process from 'node:process'
import {test,expect} from '../../fixtures/hooks-fixtures'
import loginData from '../../test-data/login-page-data.json'


test.describe('LoginModule',async()=>{
test('TC_01[LoginModule] --- Login with Valid Credentials',{
    tag:['@UI','@UAT'],
    annotation:{
        type:'LoginModule TC01',
        description:'Valid Credentials'
    }
},async({goToUrl,loginPage,userPageLeftPannel,logout})=>{

    await loginPage.loginParaBank(process.env.USER_NAME!,process.env.PASSWORD!);
    await expect(userPageLeftPannel.accountOverview).toHaveText('Accounts Overview');

})

test('TC_02[LoginModule] --- Login with Invalid Credentials : WrongUserName',{
    tag:['@UI','@UAT'],
    annotation:{
        type:'LoginModuleTest',
        description:'check login with invalid username and correct password'
    }
},async({goToUrl,loginPage,logout})=>{

    await loginPage.loginParaBank(loginData.wrong_username,process.env.PASSWORD!)
    await expect(loginPage.credentialsError).toContainText('The username and password could not be verified.')
})

test('TC_02.2[LoginModule] --- Login with Invalid Credentials : WrongPassword',{
    tag:['@UI','@UAT','@DEV'],
    annotation:{
        type:'LoginModule Test',
        description:'check login with invalid password and correct username'
    }
},async({goToUrl,loginPage,logout})=>{

   await loginPage.loginParaBank(process.env.USER_NAME!,loginData.wrong_password)
    await expect(loginPage.credentialsError).toContainText('The username and password could not be verified.')
})

})