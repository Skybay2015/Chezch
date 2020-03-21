const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const transporter = nodemailer.createTransport({
   host: 'smtp.yandex.ru',
   port: 465,
   secure: true,
   auth: {
      user: 'chechMailSend@yandex.ru',
      pass: '5432167890',
   },
});

const allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', '*');
   next();
};

app.use(express.json());

app.use(allowCrossDomain);

app.use(express.urlencoded({ extended: false }));

app.post('/quiz', (req, res) => {
   const htmlBody = `<h2>Заказан обратний звонок с формы: Второй блок</h2>
   <p>Ответы: ${req.body['answers[]'].join(', ')}</p>
   <p>Номер телефона: ${req.body.phone}</p>
   `;

   const mail = {
      from: 'chechMailSend@yandex.ru',
      to: 'mishka-starkov1983@mail.ru',
      subject: 'Письмо с формы со второго блока',
      html: htmlBody,
   };

   transporter.sendMail(mail, (err, info) => {
      if (err) {
         console.log(err);
         res.json({
            message:
               'Произошла ошибка, письмо не отправлено, попробуйте еще раз',
         });
      }
   });
});

app.post('/modal', (req, res) => {
   let formName;
   let text = 'Имя';

   switch (req.body.formName) {
      case 'questionForm':
         formName = 'Обратный звонок';
         break;
      case 'consultationForm':
         formName = 'Консультация';

         break;

      case 'contactsForm':
         formName = 'Вопрос';
         text = 'Вопрос';
         break;

      case 'priceForm':
         formName = 'Расчет стоимости';
         break;
   }

   const htmlBody = `
   <h2>Заказан обратний звонок с формы: ${formName}</h2>
    <p>${text}: ${req.body.name || 'Не указал(а) имени'}</p>
   <p>Номер телефона: ${req.body.phone}</p>
   `;

   const mail = {
      from: 'chechMailSend@yandex.ru',
      to: 'mishka-starkov1983@mail.ru',
      subject: `Письмо с формы: ${formName}`,
      html: htmlBody,
   };

   transporter.sendMail(mail, (err, info) => {
      if (err) {
         console.log(err);
         res.json({
            message:
               'Произошла ошибка, письмо не отправлено, попробуйте еще раз',
         });
      }
   });
});

app.listen(8000, () => console.log('Server is working'));
