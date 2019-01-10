
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
  '會依照登入帳號 顯示歡迎訊息': (client) => {
    goHomePage(client);


    client.setValue('#username', 'test');
    client.setValue('#password', 'test');

    client.click('#singin');
    client.pause(1000);

    client.assert.urlEquals(`${process.env.VUE_DEV_SERVER_URL}demo/home.html`);

    client.expect.element('#userTitle').text.to.equal('test');

    closePage(client);
  },

};
