📦 Как создать package.json

В корне проекта открыть терминал и выполнить:

npm init -y

Это создаст файл package.json.

🔧 Добавить команду для SASS

В файле package.json найти "scripts" и добавить туда:

"scripts": {
"sass": "sass css:css --style=expanded --watch",
"test": "echo \"Error: no test specified\" && exit 1"
}

Теперь запуск компиляции:

npm run sass

После запуска терминал будет показывать, что Sass следит за всеми .scss файлами и автоматически создаёт .css файлы.
