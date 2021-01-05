let categories = [
    {
      name: "Дозволенность",
      var: "permissiveness",
      description: "Высокий балл по этой шкале означает, что вы обладаете вполне современным, передовым, легким отношением к сексу, решительно выступая против религиозных, викторианских и прочих старомодных представлений о «правильном» и «надлежащем» в этой сфере человеческих отношений. Вы не озабочены проблемами девственности, приемлете добрачный секс (или даже внебрачные связи), уверены, что контрацептивные средства должны быть общедоступны, и рассматриваете секс в целом как удовольствие, которое не должно волновать никого, кроме «согласных» сторон (имеются в виду не только взрослые, но и подростки и даже дети). \n\nНизкий балл по этой шкале означает прямо противоположное: человек, получивший низкий балл, относится к половым связям более серьезно, он уважает брачные узы и не поддерживает «аморальность» ни в каком виде. \n\nЛюди, получившие средний балл, занимают позицию между этими двумя крайностями.",
      woman: '10',
      man: '10'
    }, 
    {
        name: "Реализованность",
        var: "realization",
        description: "Вторая шкала оценивает уровень сексуальной «реализованности», или общей удовлетворенности человека своей сексуальной жизнью в настоящее время. \n\nВысокий балл означает высокий уровень реализованности, низкий - полную нереализованность. Вообще говоря, удовлетворенность своей сексуальной жизнью является для большинства людей чрезвычайно привлекательным состоянием, а низкий балл по этой шкале - это признак серьезного разочарования этой областью отношений между полами. Конечно, причин тому может быть немало, и, чтобы выявить специфические для данного человека факторы, необходим индивидуальный подход. Эти причины могут заключаться как в самом человеке, так и в его партнере. Пути достижения более благополучного положения в этой сфере в значительной степени зависят от конкретного сочетания тех или иных причин.",
        woman: '8',
        man: '8'
    }, 
    {
        name: "Сексуальная невротичность",
        var: "neuroticism",
        description: "Неудовлетворенность, разочарование в своей сексуальной жизни часто приводят к невротическим сексуальным реакциям (мы используем здесь термин «невротический» не в психиатрическом смысле, не как форму психического отклонения, а в более обыденном значении как указание на некоторую разбалансированность, или функциональные сдвиги, в поведении человека). \n\nЛюди, получившие высокие оценки по данной шкале, как правило, имеют проблемы со своей сексуальной жизнью; им сложно контролировать или подавлять свои импульсы, они легко приходят в смятение или огорчаются из-за своих собственных мыслей или поступков. Эти люди постоянно озабочены какими-то проблемами, связанными с сексом, и тем самым делают себе только хуже. \n\nТем, кто получил по этой шкале очень высокий балл, стоило бы подумать о том, чтобы посетить врача или обратиться за советом к знающим людям.",
        woman: '4',
        man: '4'
    }, 
    {
        name: "Обезличенный секс",
        var: "impersonalSex",
        description: "Четвертая шкала определяет склонность человека к «обезличенному сексу», т. е. тенденцию рассматривать сексуального партнера только в качестве объекта для получения чувственного удовольствия, не принимая во внимание его личность, индивидуальные особенности характера и темперамента и не пытаясь войти с партнером в сколько-нибудь значимую личностную связь. \n\nМужчины неизменно получают по этой шкале более высокие баллы, чем женщины, и, хотя обезличенный секс отнюдь не является сугубо мужской прерогативой, женщины в целом рассматривают эту форму сексуального поведения как менее привлекательную.",
        woman: '4',
        man: '8'
    }, 
    {
        name: "Порнография",
        var: "pornography",
        description: "Пятая шкала относится к «порнографии», т.е. получению удовольствия от рисунков или фотографий, изображающих сексуальные сюжеты, или словесного описания сексуальных сцен, обычно в максимально откровенной форме. \n\nВ эту же категорию попадает и склонность к созерцанию людей, занимающихся любовью. \n\nМногие споры по поводу порнографических фильмов, телевизионных сериалов и театральных пьес рассматривают как раз те вопросы, которые задаются в данном тесте. \n\n Высокий балл по данной шкале указывает на одобрение порнографии (или, по крайней мере, на значительную терпимость к ней), в то время как низкий балл означает неодобрение и нетерпимость к порнографии.",
        woman: '2',
        man: '2'
    }, 
    {
        name: "Сексуальная застенчивость",
        var: "shyness",
        description: "Название шестой шкалы, «сексуальная застенчивость», говорит само за себя. \n\nЛюди с высоким баллом по этой шкале чувствуют себя крайне нервно в отношениях с противоположным полом, их очень смущают разговоры о сексе, а порой они просто боятся сексуальных отношений. \n\nВысокие баллы означают сильное нежелание участвовать в сексуальных отношениях, тогда как низкий балл указывает на более «нормальную» реакцию.",
        woman: '2',
        man: '2'
    }, 
    {
        name: "Целомудрие",
        var: "chastity",
        description: "Седьмая шкала, «целомудрие», имеет некоторое сходство с предыдущей, и опять-таки ее название говорит само за себя. \n\nЛюди с высокими баллами, как правило, воздерживаются даже от самых незначительных проявлений сексуальной страсти, не любят думать на эту тему, да и вообще заниматься любовью. \nЗдесь также низкий балл указывает на более «нормальное» и обычное отношение к этой проблеме, а высокие баллы свидетельствуют о не совсем типичном поведении.",
        woman: '2',
        man: '2'
    }, 
    {
        name: "Сексуальное отвращение",
        var: "aversion",
        description: "Восьмая шкала, «отвращение к сексу», предназначена для оценки гораздо более сильного выражения того же чувства, которое тестировалось седьмой шкалой, т.е. целомудрия. \n\nЛюди, набравшие высокие баллы, с отвращением реагируют на некоторые виды секса, даже занимаясь любовью со своим постоянным партнером, а порой буквально заставляют себя заниматься этим делом. \n\nТаким людям отвратительны даже те виды сексуального поведения, которые большинству людей представляются вполне нормальными. Низкие баллы указывают на более здоровую установку.",
        woman: '3',
        man: '3'
    }, 
    {
        name: "Сексуальная возбудимость",
        var: "excitability",
        description: "«Сексуальная возбудимость», или высокая сексуальная чувствительность, оценивается по девятой шкале. Некоторым людям, чтобы прийти в состояние сексуального возбуждения, необходим целый ряд определенных условий; такие люди наберут низкий балл по данной шкале. \n\nДругие возбуждаются очень легко и, соответственно, набирают высокие баллы.\n\nС большой долей вероятности можно ожидать, что люди, набравшие высокие баллы по трем предыдущим шкалам, скорее всего наберут низкие баллы по данной шкале.",
        woman: '6',
        man: '5'
    }, 
    {
        name: "Физический секс",
        var: "physicalSex",
        description: "Десятая шкала оценивает ориентировку на «физический секс», т.е. на активное стремление к реальному половому контакту.\n\nДля людей с высокими баллами по данной шкале крайне важно оказаться на высоте в постели со своим партнером; они ценят это гораздо выше, чем другие, более духовные качества, которым отдают предпочтение люди, набирающие низкие баллы по этой шкале.\n\nВысокий балл означает, что секс ставится выше всего и самому половому акту уделяется особое внимание за счет других сторон любовных отношений.",
        woman: '4',
        man: '4'
    },
    {
        name: "Агрессивный секс",
        var: "aggressiveSex",
        description: "Последняя шкала касается «агрессивного секса». Здесь внимание фиксируется на враждебности в сексуальной связи, на желании подавить партнера и, возможно, даже унизить его.\n\nБыло бы глупо утверждать, что такие мысли и чувства не свойственны сексуальным отношениям; просто для некоторых людей они стали едва ли не нормой сексуального поведения, а другие испытывают нечто подобное в редких случаях.\n\nЯсно, что набравшие высокие баллы по данной шкале более склонны к враждебности и агрессивным импульсам по отношению к своим сексуальным партнерам.",
        woman: '3',
        man: '3'
    }, 
    {
        name: "Сексуальное либидо",
        var: "libido",
        description: "Далее мы обратимся к двум «супершкалам», интегрирующим выявленные в исследованиях взаимосвязи между теми простыми шкалами, которые обсуждались до сих пор.\n\nСовершенно очевидно, что существуют корреляции между дозволенностью, сексуальной возбудимостью, порнографией, обезличенным и физическим сексом.\n\nМожно смело предположить, что человек, набравший высокий балл по всем или большинству названных качеств, обладает сильным либидо, иначе говоря, он (или она) обладает сильным сексуальным влечением.\n\nПредлагаемая шкала «сексуального либидо» пытается измерить силу сексуального влечения тестируемого.",
        woman: '17',
        man: '22'
    }, 
    {
        name: "Сексуальная удовлетворенность",
        var: "satisfaction",
        description: "Рассуждая аналогичным образом, можно опять-таки предположить, что шкала «реализованность» отрицательно коррелирует со шкалами «сексуальная невротичность», «сексуальная застенчивость», «целомудрие» и «отвращение к сексу». Таким образом возникает еще одна комбинированная шкала, которую мы определили как «сексуальную удовлетворенность».\n\nНадо отметить следующий интересный факт: в больших группах опрошенных мы постоянно наблюдали отсутствие корреляции между либидо и сексуальной удовлетворенностью.\n\nИными словами, удовлетворенность человека своей сексуальной жизнью совершенно не зависит от его сексуального аппетита. Люди могут вести совершенно удовлетворительную, по их мнению, сексуальную жизнь, совершенно не напрягаясь относительно того, чтобы активно, энергично и часто заниматься любовью; с другой стороны, их сексуальная жизнь может быть вполне удовлетворительной и тогда, когда такие активные, энергичные и частые занятия любовью становятся основной, если не единственной, целью жизни.\n\nВсегда бывает очень сложно убедить людей какого-то одного склада в том, что другие люди, резко отличающиеся от них по своим личностным особенностям, не только предпочитают именно свой образ жизни, но процветают и счастливы. И тем не менее это действительно так!\n\nЕсть немало способов стать счастливым человеком, и частота половых сношений отнюдь не единственный путь создания взаимоудовлетворяющих сексуальных отношений.",
        woman: '11',
        man: '11'
    }, 
    {
        name: "Маскулинность – Фемининность",
        var: "MasculinityFemininity",
        description: "Как уже упоминалось ранее, эта шкала включает вопросы, относящиеся к тем качествам, по которым тот или иной пол проявляет себя чаще, чем другой. Под «маскулинностью» мы понимаем здесь не что иное, как то, что читатель, получивший высокий балл по данной шкале, в сексуальных вопросах соответствует образу типичного для нашего общества мужчины и не отвечает типичному женскому образу.\n\nСоответственно понимается и «фемининность»: мужчины или женщины, набравшие низкий балл, в вопросах сексуального поведения предпочитают больше соглашаться с женщинами, нежели с мужчинами.\n\nВ конструкции шкалы, таким образом, заложено, что женщины могут получить «маскулинные» баллы, а мужчины- «фемининные». Разумеется, это никак, не свидетельствует ни о мужественности тестируемых, ни о их женственности в обычном понимании этих качеств и определенно не имеет никакого отношения к гомосексуализму или лесбиянству.",
        woman: '24',
        man: '33'
    }, 
  ]

  module.exports = categories