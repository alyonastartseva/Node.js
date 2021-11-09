const path = require('path')

//полный путь к текущему файлу
console.log('Filename: ',__filename)
//полный путь к директории текущего файла
console.log('Dirname: ', __dirname)

console.log('Название файла: ', path.basename(__filename))
//возвращает полный путь
console.log('Название директории: ', path.dirname(__filename))
console.log('Расширение файла: ', path.extname(__filename))
//парсит путь на: root, dir, base, ext, name - возвращает объект
console.log('Parse: ', path.parse(__filename))
console.log(path.join(__dirname, 'server', 'index.html'))

