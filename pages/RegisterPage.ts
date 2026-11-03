import { Locator, Page } from "@playwright/test";
import registerUserData from '../test-data/RegisterUserData.json'

export class RegisterPage
{
    readonly page:Page;
    readonly firstNameInput:Locator;
    readonly lastNaminput:Locator;
    readonly addressInput:Locator;
    readonly cityInput:Locator;
    readonly stateInput:Locator;
    readonly phoneInput:Locator;
    readonly zipcodeInput:Locator;
    readonly ssnInput:Locator;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly confirmInput:Locator;
    readonly registerButton:Locator;
    readonly welcomeMessage:Locator;


    constructor(page:Page)
{
    this.page=page;
    this.firstNameInput=page.locator('[id="customer.firstName"]');
    this.lastNaminput=page.locator('[id="customer.lastName"]')
    this.addressInput=page.locator('[id="customer.address.street"]')
    this.cityInput=page.locator('[id="customer.address.city"]')
    this.stateInput=page.locator('[id="customer.address.state"]')
    this.phoneInput=page.locator('[id="customer.phoneNumber"]');
    this.zipcodeInput=page.locator('[id="customer.address.zipCode"]');
    this.ssnInput=page.locator('[id="customer.ssn"]');
    this.userNameInput=page.locator('[id="customer.username"]')
    this.passwordInput=page.locator('[id="customer.password"]');
    this.confirmInput=page.locator('#repeatedPassword');
    this.registerButton=page.getByRole('button', { name: 'Register' });
    this.welcomeMessage=page.getByRole('heading',{name:`Welcome ${registerUserData.username}`})

    
}

async userRegistration(firstName:string,
    lastName:string,
    address:string,
    city:string,
    state:string,
    phone:string,
    zip:string,
    ssn:string,
    userName:string,
    password:string,
    confirm:string,
    
    
)
{

    await this.firstNameInput.fill(firstName);
    await this.lastNaminput.fill(lastName);
    await this.addressInput.fill(address);
    await this.cityInput.fill(city);
    await this.stateInput.fill(state);
    await this.phoneInput.fill(phone);
    await this.zipcodeInput.fill(zip);
    await this.ssnInput.fill(ssn);
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.confirmInput.fill(confirm);
    await this.registerButton.click()


}


async getWelcomeMessage()
{
    return await this.welcomeMessage.innerText()
}
    
}





//testPlaywright