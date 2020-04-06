export default {
  message: `Пожалуйста, поддержите нас деньгами через  
<a target='_blank' rel='noopener noreferrer' href='https://www.paypal.me/aparus'>
PayPal</a> или <a target='_blank' rel='noopener noreferrer' href='https://money.yandex.ru/to/41001512310147'>
YandexMoney</a>. 

На что нам нужны деньги? 
`,
  expansionPanel: [
    {
      title: `Программный продукт`,
      content: `В первую очередь наш проект - это программный продукт, доступный для всех как в виде исходного кода, 
так и готового к использованию сервиса.

На его создание ушло около 4 месяцев плотной работы. 
Также написанию кода предшествует его проектирование, исследования и эксперименты. 

Код открытый и вы можете посмотреть каждую правку в нём, проследить всю историю его создания и оценить объем. 
Также мы публикуем на <a target="_blank" rel='noopener noreferrer' href="https://github.com/aparus/frazy">Гитхабе</a> наши планы на будущее, 
текущие задачи и процесс работы. Вы можете оценить их объем и полезность. 
`,
    },
    {
      title: `Технические расходы`,
      content: `Сервис находится на хостинге Google Firebase и пока что укладывается в бесплатный тариф 'Spark': 
2 ГБ файлового хранилища и 1 ГБ для БД. Но как только мы преодолеем этот порог, 
возникнут ежемесячные расходы исходя из этого прайса. 
`,
    },
    {
      title: `Контент`,
      content: `Мы хотели показать суть идеи и её универсальность, 
поэтому добавили как минимум по 1 материалу из 6 официальных языков ООН с английским переводом. 
Это немалый труд. На самом деле сделано намного больше этого (добавлены несколько аудиокниг), 
но так как мы не знаем, какой  язык интересен именно вам, мы не будем здесь этим хвастаться.

Хотя мы рассчитываем на то, что пользователи сами будут добавлять основную часть материалов, 
мы берем на себя работу по модерации. 
Иногда нам придется показывать пример, задавать темп.  
Приоритеты по контенту и процесс работ будет отображаться примерно вот так. 
Только для каждого языка отдельно. 

Ну и нам придётся написать немало документации и уроков: как что работает, как что делать. 
Проект включает немало концептуальных вещей, которые надо проработать и описать. 
`,
    },
    {
      title: `Приоритеты распределения расходов`,
      content: `1) В первую очередь мы хотим закрыть наши затраты на создание первой версии программы и запуска сервиса, 
    со всеми демо материалами и статьями это $4k.

2) Технические расходы (без них сайт не сможет полноценно функционировать)

3) Завершение запланированных работ по веб-платформе. Это ещё $4k (из расчёта $1k за месяц работы).

4) Контент. Исходя из предпочтений пользователей мы будем добавлять аудиокниги и подкасты.

5) SMM, создание и распространение информации о нас,  активный поиск партнеров - в университетах, школах, на языковых форумах.
`,
    },
    {
      title: `Отчетность`,
      content: `Мы будем публиковать каждое пожертвование в формате:
Дата, Сумма, Комментарий. Так что вы всегда сможете оценить объем поступивших к нам средств и то, как мы ими распорядились. 
В конце месяца мы подводим итоги. Вся наша работа открыта. 
За кодом вы можете следить на гитхабе, за контентом - на сайте, за медиа - в соцсетях.

По мере роста проекта мы будем оставлять заявки на спонсорство на платформах, поддерживающих опенсорс проекты. 
На данном этапе мы ограничены рядом факторов. Например отсутствием системы платежей Stripe в странах основателей проекта, и даже малым количеством звёзд на Гитхабе.
  `,
    },
  ],
}
