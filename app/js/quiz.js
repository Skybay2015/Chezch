(function() {
   // Состояние нашего теста
   const quiz = {
      questions: {
         1: {
            question: 'Когда планируете свой переезд в Чехию?',
            answers: {
               0: 'В ближайшее время',
               1: 'Через 6 месяцев',
               2: 'Через год',
               3: 'Другое',
            },
         },
         2: {
            question: 'Выберете для каких целей планируете переезд в Чехию?',
            answers: {
               0: 'Иммиграция',
               1: 'Для работы',
               2: 'Для учебы',
               3: 'Для бизнеса',
               4: 'Другое',
            },
         },
         3: {
            question: 'Сколько человек планирует переезд (включая детей)?',
            answers: {
               0: 1,
               1: 2,
               2: 3,
               3: 'более 3-х',
            },
         },
      },
      finished: false,
      activeQuestion: 1,
      answer: '',
      answers: [],
   };

   // При загрузке сайта зарендерить 1 вопрос
   $(document).ready(function() {
      const { questions, activeQuestion } = quiz;
      $('.quiz_number').text(`Вопрос ${activeQuestion} из 4`);
      if (quiz.activeQuestion < 4) {
         $('.quiz_title').text(quiz.questions[activeQuestion].question);
      }

      // Cпрятать кнопку пред вопроса и форму обратной свзяи
      $('#quiz_btn_prev').hide();
      $('.quiz_form_container').hide();

      //Пройтись циклом по елементам и добавить им вопросы из объекта quiz
      $('.quiz_answer').each(function(index) {
         $(this).text(questions[activeQuestion].answers[index]);
         $(this)
            .parent()
            // Добавлять ответ в переменную answers
            .on('click', function(e) {
               quiz.answer = questions[quiz.activeQuestion].answers[index];

               let { activeQuestion } = quiz;
               const { answers } = quiz;

               if (quiz.activeQuestion === 3) {
                  quiz.finished = true;
               }

               if (quiz.answer) {
                  answers.push(quiz.answer);
                  quiz.answer = '';

                  quiz.activeQuestion = ++activeQuestion;

                  if (activeQuestion < 4) {
                     $('.quiz_title').text(
                        quiz.questions[activeQuestion].question,
                     );
                  }

                  $('#quiz_progress_bar').css(
                     'maxWidth',
                     `${activeQuestion * 25}%`,
                  );

                  $('.quiz_number').text(`Вопрос ${activeQuestion} из 4`);
                  $('#quiz_btn_prev').show();

                  if (!quiz.finished) {
                     renderQuestions(activeQuestion);
                  } else {
                     // Перейти к форме отправки
                     $('#quiz_btn_next').hide();
                     $('#quiz_btn_prev').hide();
                     $('.quiz_question').hide();
                     $('.quiz_form_container').show();
                  }
               }
            });
         // Спрятать последний элемент при рендеринге
         $('.quiz_answer')
            .last()
            .parent()
            .hide();
      });
   });

   $('#quiz_btn_prev').on('click', () => {
      let { activeQuestion } = quiz;

      quiz.answer = '';
      quiz.answers.pop();

      quiz.activeQuestion = --activeQuestion;

      if (activeQuestion < 4) {
         $('.quiz_title').text(quiz.questions[activeQuestion].question);
      }

      $('.quiz_number').text(`Вопрос ${activeQuestion} из 4`);

      if (activeQuestion === 1) {
         $('#quiz_btn_prev').hide();
      }

      $('#quiz_progress_bar').css('maxWidth', `${activeQuestion * 25}%`);

      renderQuestions(activeQuestion);
   });

   $('#quiz_form').submit(function(e) {
      e.preventDefault();
      const phone = $('#quiz_form')[0].phone.value;
      const agree = $('#quiz_form')[0].agreeQuiz.checked;
      const actionUrl = e.currentTarget.action;

      if (agree) {
         $.ajax({
            url: actionUrl,
            type: 'post',
            dataType: 'application/json',
            data: {
               answers: quiz.answers,
               phone,
            },
         });
      }
   });

   function renderQuestions(activeQuestion) {
      $('.quiz_answer').each(function(index) {
         $(this).text(quiz.questions[activeQuestion].answers[index]);
         if (activeQuestion === 2) {
            $('.quiz_answer')
               .last()
               .parent()
               .show();
         } else {
            $('.quiz_answer')
               .last()
               .parent()
               .hide();
         }
      });
   }
})();
