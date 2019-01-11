// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

const baseURL = `${process.env.VUE_DEV_SERVER_URL}demo`;

const goHomePage = (client) => {
  client
    .url(baseURL)
    .pause(1000);

  // 等畫面開啟完畢
  client.expect.element('body').to.be.present.before(1000);
};

const closePage = (client) => {
  client.end();
};

module.exports = {
  '首頁上有 帳號,密碼輸入框,登入按鈕,註冊按鈕': (client) => {
    goHomePage(client);


    client.expect.element('#username').to.be.visible;
    client.expect.element('#username').to.be.an('input');

    client.expect.element('#password').to.be.visible;
    client.expect.element('#password').to.be.an('input');

    client.expect.element('#singin').to.be.visible;
    client.expect.element('#singin').to.be.an('a');

    client.expect.element('#register').to.be.visible;
    client.expect.element('#register').to.be.an('a');

    closePage(client);
  },

  '點選註冊 會連到 註冊頁面': (client) => {
    goHomePage(client);

    client.click('#register');
    client.pause(1000);

    client.assert.urlEquals(`${baseURL}/register.html`);

    closePage(client);
  },

  '點選登入 如果帳號未輸入 顯示請輸入帳號': (browser) => {
    browser
      .url(baseURL)
      .waitForElementVisible('body', 5000)
      .click('#singin')
      .getAlertText((msg) => {
        browser.assert.equal(msg.value, '請輸入帳號');
      })
      .end();
  },

  '點選登入 如果有輸入帳號 未輸入密碼 顯示請輸入密碼': (client) => {
    goHomePage(client);

    client.setValue('#username', 'test');

    client.click('#singin');
    client.pause(1000);

    client.getAlertText((msg) => {
      client.assert.equal(msg.value, '請輸入密碼');
    });

    closePage(client);
  },

  '點選登入 如果帳號密碼都有輸入 會連到 HOME': (client) => {
    goHomePage(client);

    client.setValue('#username', 'test');
    client.setValue('#password', 'test');

    client.click('#singin');
    client.pause(1000);

    client.assert.urlEquals(`${baseURL}/home.html`);

    closePage(client);
  },
};
