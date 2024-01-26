describe('Проверка на позитивный тест авторизации', function () {

    it('Авторизация позитивна', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail') .type('german@dolnikov.ru') // Найти поле для ввода почты и ввести правильную почту
       cy.get('#pass') .type('iLoveqastudio1') // Ввести правильный пароль
       cy.get('#loginButton') .click() // Кликаем на кнопку
       cy.get('#message') .contains('Авторизация прошла успешно') // Содержит нужный текст
       cy.get('#exitMessageButton > .exitIcon') .should('be.visible') // Крестик виден
       })

       it('Восстановить пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#forgotEmailButton') .click() // Нажать на кнопку восстановить
        cy.get('#mailForgot') .type('vaqifyusibli@gmail.com') // ввести почту
        cy.get('#restoreEmailButton') .click() // нажать на кнопку сбросить
        cy.get('#message') .contains('Успешно отправили пароль на e-mail') // cообщение содержит текст
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible') // Крестик виден
        })

        it('Авторизация  c неправильным паролем ', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail') .type('german@dolnikov.ru') // Найти поле для ввода почты и ввести правильную почту
            cy.get('#pass') .type('iLoveqastudio5') // Ввести правильный пароль
            cy.get('#loginButton') .click() // Кликаем на кнопку
            cy.get('#message') .contains('Такого логина или пароля нет') // Содержит нужный текст
            cy.get('#exitMessageButton > .exitIcon') .should('be.visible') // Крестик виден
            })
        it('Авторизация  c неправильным логином и правильным паролем ', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail') .type('german@dolnikov1.ru') // Найти поле для ввода почты и ввести правильную почту
            cy.get('#pass') .type('iLoveqastudio1') // Ввести правильный пароль
            cy.get('#loginButton') .click() // Кликаем на кнопку
            cy.get('#message') .contains('Такого логина или пароля нет') // Содержит нужный текст
            cy.get('#exitMessageButton > .exitIcon') .should('be.visible') // Крестик виден
                })
        it('Валидация', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail') .type('germandolnikov1.ru') // Найти поле для ввода почты и ввести правильную почту
            cy.get('#pass') .type('iLoveqastudio1') // Ввести правильный пароль
            cy.get('#loginButton') .click() // Кликаем на кнопку
            cy.get('#message') .contains('Нужно исправить проблему валидации') // Содержит нужный текст
            cy.get('#exitMessageButton > .exitIcon') .should('be.visible') // Крестик виден
                        })
        it('Напиши проверку на приведение к строчным буквам в логине:', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail') .type('GerMan@Dolnikov.ru') // Найти поле для ввода почты и ввести правильную почту
            cy.get('#pass') .type('iLoveqastudio1') // Ввести правильный пароль
            cy.get('#loginButton') .click() // Кликаем на кнопку
            cy.get('#message') .contains('Такого логина или пароля нет') // Содержит нужный текст
            cy.get('#exitMessageButton > .exitIcon') .should('be.visible') // Крестик виден
                                        })        
       
})