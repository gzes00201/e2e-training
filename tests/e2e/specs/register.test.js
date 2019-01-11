
const baseURL = `${process.env.VUE_DEV_SERVER_URL}`

const goHomePage = (client) => {
  client
    .url(baseURL)
    .pause(1000)

  // 等畫面開啟完畢
  client.expect.element('body').to.be.present.before(1000)

  client.click('#register').pause(1000)
}

const closePage = (client) => {
  client.end()
}

module.exports = {
  '註冊頁上有 帳號,密碼輸入框,性別選單,註冊按鈕': (client) => {
    goHomePage(client)


    client.expect.element('#username').to.be.visible
    client.expect.element('#username').to.be.an('input')

    client.expect.element('#password').to.be.visible
    client.expect.element('#password').to.be.an('input')

    client.expect.element('#sex').to.be.visible
    client.expect.element('#sex').to.be.an('select')

    client.expect.element('#register').to.be.visible
    client.expect.element('#register').to.be.an('a')

    closePage(client)
  },

  '點選註冊 如果帳號未輸入 顯示請輸入帳號': (browser) => {
    browser
      .url(baseURL)
      .waitForElementVisible('body', 5000)
      .click('#register')
      .pause(1000)
      .click('#register')
      .getAlertText((msg) => {
        browser.assert.equal(msg.value, '請輸入帳號')
      })
      .end()
  },

  '點選註冊 如果有輸入帳號 未輸入密碼 顯示請輸入密碼': (client) => {
    goHomePage(client)

    client.setValue('#username', 'test')

    client.click('#register')
    client.pause(1000)

    client.getAlertText((msg) => {
      client.assert.equal(msg.value, '請輸入密碼')
    })

    closePage(client)
  },

  '性別選單 預設為男性': (client) => {
    goHomePage(client)

    client.expect.element('#sex').to.have.value.that.equals('M')

    closePage(client)
  },

  '點選註冊 如果帳號密碼性別都有輸入 會連到 登入頁': (client) => {
    goHomePage(client)

    client.setValue('#username', 'test')
    client.setValue('#password', 'test')

    client.click('#register')
    client.pause(1000)

    client.assert.urlEquals(`${process.env.VUE_DEV_SERVER_URL}`)

    closePage(client)
  }
}
