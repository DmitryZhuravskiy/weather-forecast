<h1><b>Weather-Forecast</b></h1>

Презентационная версия - https://dmitryzhuravskiy.github.io/weather-forecast/,

запасная - https://dmitryzhuravskiy.github.io/search-weather/
<br /><br />

<h2><b>Руководство по запуску</b></h2>
<b>1.</b> git clone https://github.com/DmitryZhuravskiy/weather-forecast.git <i>- копируем репозиторий;</i><br />
<b>2.</b> cd ./weather-forecast <i>- переходим в папку с локальной версией;</i><br />
<b>3.</b> npm install <i>- устанавливаем зависимости;</i><br />
<b>4.</b> npm start <i>- для просмотра локальной версии в браузере по адресу http://localhost:3000/ ;</i><br />
<b>5.</b> <i>или</i> npm run build <i>для сборки проекта;</i><br />
<br /><br />
<h2><b>Описание проекта</b></h2>

Это React-приложения для получения данных о погоде по названию города. Сделано по макету от тестового задания. Данные подгружаются с openweathermap.org/api. 

Можно добавлять в список города, можно удалять города из списка при клике на 'крестик', при клике по выбранному из списка городу можно получить данные, размещенные ниже и разделенные на два экрана для дня и ночи, о температуре днем, ночью, максимальной/минимальной температуре за день, максимальную/минимальную на следующие три дня, давления, влажность, скорость ветра, время рассвета, заката и общую длину дня. При закрытие вкладки список сохраняется через localStorage.

Приложение сделано на основе create-react-app. Никаких других расширений, например Redux, Router, Reselect, нет. Вполне достаточно запустить npx create-react-app my-app и заменить папки src и public на папки из этого репозитория и все будет работать. Пощелкать можно в презентационной версии, у меня работает, но, может быть, возникнут проблемы из-за localStorage, поэтому я оставил две ссылки на разные реализации этого проекта, чтобы уж наверняка.


<img src="https://github.com/DmitryZhuravskiy/weather-forecast/raw/main/public/images/weather-forecast.jpg" style="margin: 0 auto; display: block;"/>
<b>Добавление в список, удаление и при клике получение подробной информации (ниже)</b>
<br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/weather-forecast/raw/main/public/images/weather-forecast--2.jpg" margin-left="50px"/>
<b>Данные о погоде за темное время суток</b>
<br /><br /><br />

<img src="https://github.com/DmitryZhuravskiy/weather-forecast/raw/main/public/images/weather-forecast--3.jpg" margin="auto"/>
<b>Данные о погоде в светлое время суток</b>
