
const baseURL = `${process.env.VUE_DEV_SERVER_URL}${process.env.VUE_E2E_BASE_URL}`

const COOKIE_SESSION_ID = {
  name: 'SESSION_ID',
  value: process.env.VUE_E2E_SESSION_ID,
  path: '/',
  domain: '.vir999.net',
  secure: false,
  httpOnly: false,
  expiry: Math.floor(Date.now / 1000) + 360000
}
const COOKIE_MFID = {
  name: 'mfid',
  value: process.env.VUE_E2E_mfid,
  path: '/',
  domain: 'lt.vir999.net',
  secure: false,
  httpOnly: false,
  expiry: Math.floor(Date.now / 1000) + 360000
}

const sec = 1000

const goBiaLobbyPage = client => client
    .url('http://lt.vir999.net')
    .pause(1000)
    .setCookie(COOKIE_SESSION_ID)
    .setCookie(COOKIE_MFID)
    .url('http://lt.vir999.net/pantheon/bia/#/lobby')
    .waitForElementVisible('#app > div > div.is-lobby', 30 * sec)
    .pause(3000)

const closePage = client => {
  client.end()
}

module.exports = {
  '登入大廳': client => {
    goBiaLobbyPage(client)
  }
}
