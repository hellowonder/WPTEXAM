const mysql = require('mysql')
const Promise = require('bluebird')
const Connection = require('mysql/lib/Connection')

Promise.promisifyAll(require('mysql/lib/Connection').prototype)

const dbinfo = {
  user: 'root',
  host: 'localhost',
  database: 'messages',
  password: '1234',
}

const selectMessages = async () => {
  const connection = mysql.createConnection(dbinfo)
  await connection.connectAsync()

  let sql = `select * from message`
  const list = connection.queryAsync(sql, [])

  //   console.log(list)
  await connection.endAsync()
  return list
}

const addMessages = async (data) => {
  const connection = mysql.createConnection(dbinfo)
  await connection.connectAsync()

  let sql = `insert into message values(?)`
  const list = connection.queryAsync(sql, [data.message])

  console.log('message added successfully')

  await connection.endAsync()
}

// const data = {
//   message: 'Hello How are you',
// }

// addMessages(data)

// selectMessages()

module.exports = { addMessages, selectMessages }
