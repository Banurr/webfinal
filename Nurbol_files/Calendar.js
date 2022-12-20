function change(element)
{
    var qq = element.id;
    switch (qq)
    {
        case "okt" :
            document.getElementById("okt").style.color = "#ffa205";
            document.getElementById("dec").style.color = "#FFFFFF";
            document.getElementById("fev").style.color = "#FFFFFF";
            document.getElementById("apr").style.color = "#FFFFFF";
            document.getElementById("may").style.color = "#FFFFFF";
            document.getElementById("naming").innerHTML = "ОКТЯБРЬ. ТУР АЗОРЫ - ЕВРОПЕЙСКИЙ «ЗАТЕРЯННЫЙ МИР ИЛИ «ТАИНСТВЕННЫЕ ОСТРОВА»";
            document.getElementById("dates").innerHTML = "15.10.2022 – 26.10.2022";
            document.getElementById("pikcha").src = "../Nurbol_files/Nurbol images/azore.jpg";
            document.getElementById("price").innerHTML = "€2199";
            document.getElementById("fir").innerHTML = "Активные приключения в весёлой компании: треккинг и восхождения (справится даже новичок). Вы точно удивитесь своим физическим возможностям";
            document.getElementById("sec").innerHTML = "Исследования и разгадка тайн пещеры Algar do Carvao (вулканический кратер). Это место таит много секретов. Кто знает, может, именно вы найдёте свой ответ.";
            document.getElementById("thi").innerHTML = "Головокружительные виды, потрясающие фотографии и видео. Миллионы лайков вам обеспечены.";
            document.getElementById("fou").innerHTML = "Знакомство с самыми счастливыми коровами. Считается, что азорское молоко и масло — лучшее в мире. Проверим?";
            document.getElementById("fif").innerHTML = "Уютные душевные вечера с новыми друзьями. Помните как было в лагере? Будет так же только ещё круче.";
            document.getElementById("six").style.display = "none";
            document.getElementById("sev").style.display = "none";
        break;
        case "dec" :
            document.getElementById("dec").style.color = "#ffa205";
            document.getElementById("okt").style.color = "#FFFFFF";
            document.getElementById("fev").style.color = "#FFFFFF";
            document.getElementById("apr").style.color = "#FFFFFF";
            document.getElementById("may").style.color = "#FFFFFF";
            document.getElementById("fif").style.display = "block";
            document.getElementById("six").style.display = "block";
            document.getElementById("naming").innerHTML = "ДЕКАБРЬ. КРУИЗ-ТУР ЭКВАДОР И СОКРОВИЩА ГАЛАПАГОСОВ";
            document.getElementById("dates").innerHTML = "15.12.2022 – 25.12.2022";
            document.getElementById("pikcha").src = "../Nurbol_files/Nurbol images/galap.jpg";
            document.getElementById("price").innerHTML = "€2990";
            document.getElementById("fir").innerHTML = "Экскурсия по Кито - самой высокогорной столице на нашей планеты";
            document.getElementById("sec").innerHTML = "Посетим «Середину мира», линию экватора, прохождение которого было установлено геодезической экспедицией в 1736 г.";
            document.getElementById("thi").innerHTML = "Национальный парк Котопакси с одним из вулканов, который мы увидим, следуя по панамериканскому шоссе.";
            document.getElementById("fou").innerHTML = "Озеро Килотоа, расположенном в кратере вулкана";
            document.getElementById("fif").innerHTML = "Водопад Пайлон-дель-Дьабло высотой около 90м, рафтинг для желающих, уровень 3+ и 4";
            document.getElementById("six").innerHTML = "Поедем на каное в национальный парк Ясную на 3 дня. Включает ночную прогулку!";
        break;
        case "fev" :
            document.getElementById("fev").style.color = "#ffa205";
            document.getElementById("dec").style.color = "#FFFFFF";
            document.getElementById("okt").style.color = "#FFFFFF";
            document.getElementById("may").style.color = "#FFFFFF";
            document.getElementById("apr").style.color = "#FFFFFF";
            document.getElementById("naming").innerHTML = "ФЕВРАЛЬ. ТУР ПО МЕКСИКЕ ПЛАНЕТА КИТОВ";
            document.getElementById("dates").innerHTML = "17.02.2023 - 28.02.2023";
            document.getElementById("pikcha").src = "../Nurbol_files/Nurbol images/whale.jpeg";
            document.getElementById("price").innerHTML = "€2490";
            document.getElementById("fir").innerHTML = "Сотни серых китов уже плывут к водам Калифорнийского залива, чтобы почувствовать ваши прикосновения и поглаживания. А может вы решите подарить одному из гигантов свой поцелуй?";
            document.getElementById("sec").innerHTML = "Миллионы бабочек-монархов в первых лучах солнца заставят вас замереть, улыбнуться миру и признать, что вы по-настоящему счастливы.";
            document.getElementById("thi").innerHTML = "Неразгаданные тайны пирамид Теотиуакан и загадки древних поселений разбудят в вас неистовое любопытство";
            document.getElementById("fou").innerHTML = "А как насчёт обряда на вершине пирамиды солнца? Если не переродиться, то по благодарить мир за возможности точно стоит.";
            document.getElementById("fif").style.display = "none";
            document.getElementById("six").style.display = "none";
            document.getElementById("sev").style.display = "none";
        break;
        case "apr" :
            document.getElementById("apr").style.color = "#ffa205";
            document.getElementById("dec").style.color = "#FFFFFF";
            document.getElementById("okt").style.color = "#FFFFFF";
            document.getElementById("may").style.color = "#FFFFFF";
            document.getElementById("fev").style.color = "#FFFFFF";
            document.getElementById("naming").innerHTML = "АПРЕЛЬ. РАЙСКИЙ САД В ОКЕАНЕ. МАДЕЙРА С ТАТЬЯНОЙ ЛАЗАРЕВОЙ";
            document.getElementById("dates").innerHTML = "20.04.2023 - 27.04.2023";
            document.getElementById("pikcha").src = "../Nurbol_files/Nurbol images/madeira.jpg";
            document.getElementById("price").innerHTML = "€2290";
            document.getElementById("fir").innerHTML = "Мадейра – это аромат и настроение весны. Лёгкость, свобода, безмятежность и постоянное ощущение счастья. Здесь вы почувствуете вкус жизни.";
            document.getElementById("sec").innerHTML = "Головокружительный пейзажи, которые раньше вы выделили в роликах National Geographic. А виды с горных вершин завораживают и захватывают дух. Здесь невозможно думать о будничной суете и проблемах.";
            document.getElementById("thi").innerHTML = "Вы окажетесь в гастрономическом раю: потрясающий рестораны, волшебные вина и экзотические фрукты, о существовании которых мало кто знает.";
            document.getElementById("fou").innerHTML = "СПЕЦИАЛЬНЫЙ ГОСТЬ - ТАТЬЯНА ЛАЗАРЕВА";
            document.getElementById("fif").style.display = "none";
            document.getElementById("six").style.display = "none";
            document.getElementById("sev").style.display = "none";
        break;
        case "may" :
            document.getElementById("may").style.color = "#ffa205";
            document.getElementById("dec").style.color = "#FFFFFF";
            document.getElementById("okt").style.color = "#FFFFFF";
            document.getElementById("apr").style.color = "#FFFFFF";
            document.getElementById("fev").style.color = "#FFFFFF";
            document.getElementById("fif").style.display = "block";
            document.getElementById("six").style.display = "block";
            document.getElementById("naming").innerHTML = "МАЙ. САФАРИ-ТУР \"ЧУДЕСА НАМИБИИ И ВОДОПАД ВИКТОРИЯ\"";
            document.getElementById("dates").innerHTML = "1-12 МАЯ 2023";
            document.getElementById("pikcha").src = "../Nurbol_files/Nurbol images/waterfall.jpg";
            document.getElementById("price").innerHTML = "€2590";
            document.getElementById("fir").innerHTML = "Встретимся с уникальными, белыми носорогами";
            document.getElementById("sec").innerHTML = "Отправимся в заповедник Этоша: 114 видов млекопитающих, 340 видов птиц, 110 видов рептилий";
            document.getElementById("thi").innerHTML = "Познакомимся с племенем Химба и погладим гепарда.";
            document.getElementById("fou").innerHTML = "Встречаем волшебный закат и рассвет на гряде Spitzkoppe с космическими, марсианскими картинками.";
            document.getElementById("fif").innerHTML = "Едем Свакомпунд - город кристаллов и фламинго.";
            document.getElementById("six").innerHTML = "Отправимся на джипах в Sandwich Harbour. Это уникальное место, где дюны будто падают в океан.";
            document.getElementById("sev").innerHTML = "Посетим Deadvlei – «мертвое болото» с причудливыми стволами высохших деревьев";
        break;
    }
}