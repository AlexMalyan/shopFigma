# Работа над проектом Интернет магазина 
Стартовый шаблон для верстки GULP+SCSS

## Использовал в своем проекте 

+ fileinclude - для шаблонизации (удобно собирать отдельные блоки и использовать @@loop как forech)
+ browser-sync - быстрая работа
+ scss - препроцессор
+ svgSprite - собирает картинки в спрайт svg(может и напрасно так как вышел http2)
+ Для обновления версий автоматически использую модуль --npm-check-updates командой-- `ncu -u --packageFile package.json`
  
  ------------------------------------------------------------
  ## Папка SCSS
  Файл scss соответствует файлу html

  _variables.scss собраны все переменные  

  fonts.scss формируется автоматически

  ---

  ## Запуск GULP
```
npm gulp
  ```
  ---
  ## Работа с fileinclude
  ---
  ### loop statement + data.json (оператор цикла из файла)

  data.json
  > *не знаю как сделать многомерным чтобы не раздувать количество файлов*

  ```
  [
  { "title": "My post title", "text": "<p>lorem ipsum...</p>" },
  { "title": "Another post", "text": "<p>lorem ipsum...</p>" },
  { "title": "One more post", "text": "<p>lorem ipsum...</p>" }
]
  ```
  ### Создаю файл loop-article.html

  ```
  <article>
  <h1>@@title</h1>
  @@text
</article>
  ```

 ### Записываю в тело .html
 ```
 <body>
  @@loop("loop-article.html", "data.json")
</body>
 ``` 
 сделана страница CART
 [gulp-file-include инструкция](https:www.npmjs.com/package/gulp-file-include/ "gulp-file-include")

 ---
 ### Пример работы плагина GULP-MEDIA c SCSS
 ```
 span{
        font-size: 20px;
        @media (max-width: 767px) {font-size: 15px;}
 }
 div{
   font-size: 30px;
   @media (max-width: 767px) {font-size: 20px;}
 }
 ```
 ### Начало разбиения по папкам
 Определяю структуру папок.

