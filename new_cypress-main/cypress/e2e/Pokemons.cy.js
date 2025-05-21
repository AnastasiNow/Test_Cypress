describe('Покупка нового аватара', function () {

    it('e2e тест покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зашла на сайт
         cy.get('#k_email').type('USER_LOGIN'); // Ввела верный логин
         cy.get('#k_password').type('USER_PASSWORD'); // Ввела верный пароль
         cy.get('.MuiButton-root').click(); // Нажала кнопку войти
         cy.get('.header_card_trainer').click(); // Нажала на иконку тренера в правом верхнем углу
         cy.wait(2000);
         cy.get(':nth-child(5) > #dropdown > img').click(); // Нажала кнопку Смена аватара
         cy.get('.available > button').first().click(); // Нажала кнопку Купить первого в списке аватара
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111');// Ввела номер карты 
         cy.get(':nth-child(1) > .style_1_base_input').type('12/34');// Ввела срок действия карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');// Ввела код CVC
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type(' NOVOZHILOVA ANASTASIIA');// Ввела имя и фамилию владельца карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажала кнопку Оплатить
         cy.get('.style_1_base_input').type('56456');// Ввела код подтверждения из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажала кнопку Оплатить
         cy.get('.payment_form_card_form').contains('Покупка прошла успешно').should('be.visible'); 
           })

 }) 