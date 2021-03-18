"# Weather-Forecast" 

Презентационная версия - https://dmitryzhuravskiy.github.io/weather-forecast/,

запасная - https://dmitryzhuravskiy.github.io/search-weather/

Это React-приложения для получения данных о погоде по названию города. Сделано по макету от тестового задания. Данные подгружаются с openweathermap.org/api. 

Можно добавлять в список города, можно удалять города из списка при клике на 'крестик', при клике по выбранному из списка городу можно получить данные, размещенные ниже и разделенные на два экрана для дня и ночи, о температуре днем, ночью, максимальной/минимальной температуре за день, максимальную/минимальную на следующие три дня, давления, влажность, скорость ветра, время рассвета, заката и общую длину дня. При закрытие вкладки список сохраняется через localStorage.

Приложение сделано на основе create-react-app. Никаких других расширений, например Redux, Router, Reselect, нет. Вполне достаточно запустить npx create-react-app my-app и заменить папки src и public на папки из этого репозитория и все будет работать. Пощелкать можно в презентационной версии, у меня работает, но, может быть, возникнут проблемы из-за localStorage, поэтому я оставил две ссылки на разные реализации этого проекта, чтобы уж наверняка.


<img src="https://github.com/DmitryZhuravskiy/weather-forecast/raw/main/public/images/weather-forecast.jpg" margin="auto" display="block"/>
Скриншот №1. Добавление в список, удаление и при клике получение подробной информации (на скриншотах #2 и #3)
<br />
<br />


<img src="https://github.com/DmitryZhuravskiy/weather-forecast/raw/main/public/images/weather-forecast--2.jpg" margin="auto"/>
Скриншот №2. Данные о погоде с упором на темное время суток
<br />
<br />


<img src="https://github.com/DmitryZhuravskiy/weather-forecast/raw/main/public/images/weather-forecast--3.jpg" margin="auto"/>
Скриншот №3. Данные о погоде в светлое время суток
