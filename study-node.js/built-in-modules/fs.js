const fs = require('fs')
const path = require('path')

//создание директории по указанному пути
//выдаст ошибку, если такая директория уже существует
const dirPath = path.join(__dirname, 'test')
fs.mkdir(dirPath, err => {
  if (err) {
    throw err
  }

  console.log('Папка создана')
})

//создание файла по указанному пути
//если файл с таким путём уже существует - "перезатрёт"
//fs.appendFile - добавит инфу
const filePath = path.join(__dirname, 'test', 'text.txt')
fs.writeFile(filePath, 'Hello, Node.JS', err => {
  if (err) {
    throw err
  }

  console.log('Файл создан')
})

//чтение файла
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  //без использования параметра кодировки
  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString())
  
  console.log('Content: ', content)
})