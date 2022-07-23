import * as ibmdb from 'ibm_db'

console.log(`hello`)

const connStr = 'DATABASE=testdb;HOSTNAME=localhost;UID=db2inst1;PWD=password;PORT=50000;PROTOCOL=TCPIP'

ibmdb.open(connStr, function (err, conn) {
  if (err) return console.log(err)

  conn.query('select 1 from sysibm.sysdummy1', function (err, data) {
    if (err) console.log(err)
    else console.log(data)

    conn.close(function () {
      console.log('done')
    })
  })
})

ibmdb.open(connStr).then(
  (conn) => {
    conn.query('select 1 from sysibm.sysdummy1').then(
      (data) => {
        console.log(data)
        conn.closeSync()
      },
      (err) => {
        console.log(err)
      }
    )
  },
  (err) => {
    console.log(err)
  }
)
