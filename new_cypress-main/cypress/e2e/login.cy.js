describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки вос-я пароля

         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала на кнопку Войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что авторизация прошла успешно
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и виден пользователю
        })

        it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашла на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки вос-я пароля
   
            cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
            cy.get('#pass').type('iLoveqastudio7'); // Ввела неверный пароль
            cy.get('#loginButton').click(); // Нажала на кнопку Войти
            
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что авторизация не прошла успешно
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и виден пользователю
           })

           it('Неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашла на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки вос-я пароля
   
            cy.get('#mail').type('german@dolnikovaa.ru'); // Ввела неверный логин
            cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
            cy.get('#loginButton').click(); // Нажала на кнопку Войти
            
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что авторизация не прошла успешно
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и виден пользователю
           })


           it('Логин без @ и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашла на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки вос-я пароля
   
            cy.get('#mail').type('germandolnikov.ru'); // Ввела логин без @
            cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
            cy.get('#loginButton').click(); // Нажала на кнопку Войти
            
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что авторизация не прошла успешно
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и виден пользователю
           })


           it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/'); // Зашла на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки вос-я пароля
   
            cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль

            cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту для восстановления
            cy.get('#restoreEmailButton').click(); // Нажал отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, текст на совпадение
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и виден пользователю
           })


           it('Приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/'); // Зашла на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки вос-я пароля
   
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела логин разным регистром
            cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
            cy.get('#loginButton').click(); // Нажала на кнопку Войти
            
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что авторизация прошла успешно
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что есть крестик и виден пользователю
           })

 }) 