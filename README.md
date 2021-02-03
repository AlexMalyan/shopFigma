# Работа над проектом Интернет магазина 
Стартовый шаблон для верстки GULP+SCSS

## Использовал в своем проекте 

+ fileinclude - для шаблонизации (удобно собирать отдельные блоки и использовать @@loop как forech)
+ browser-sync - быстрая работа
+ scss - препроцессор
+ svgSprite - собирает картинки в спрайт svg(может и напрасно так как вышел http2)
  
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
 [gulp-file-include инструкция](https://www.npmjs.com/package/gulp-file-include/ "gulp-file-include")

