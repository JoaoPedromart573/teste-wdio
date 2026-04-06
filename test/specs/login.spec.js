import loginPage from "../pageobjects/login.page";

describe('Funcionalidade: Login', async () => {

    beforeEach(async () => {
        await loginPage.abrirMenu()


    });

afterEach(async () => {
    await browser.relaunchActiveApp()
});


    it('Deve fazer login com sucesso', async () => {
        await loginPage.preencherLogin('teste123@gmail.com', 'senha@123')
        expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
    });

    it('Deve falhar quando fazer login com email iválido', async () => {
        await loginPage.preencherLogin('teste123' ,'senha21334')
     await loginPage.mensagemErro('Please enter a valid email address')

        await driver.pause(5000)
    });

    it('Deve falhar quando fazer login com senha iválida', async () => {
         await loginPage.preencherLogin('teste123@gmail.com' ,'1234')
     await loginPage.mensagemErro('Please enter at least 8 characters')

});

});