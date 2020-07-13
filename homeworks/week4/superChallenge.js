// 引用 package
const https = require('https');
const process = require('process');

// 發出 request 需要的參數
let options;
let req;
let data;

// Commandline 依序輸入值
const input1 = process.argv[2];
const input2 = process.argv[3];
const input3 = process.argv[4];

// 主要邏輯，依據輸入的參數判斷發送的請求
switch (input1) {
  case 'list':
    options = {
      hostname: 'lidemy-book-store.herokuapp.com',
      port: 443,
      path: '/books/?_limit=20',
      method: 'GET',
    };

    req = https.request(options, (res) => {
      res.on('data', (d) => {
        if (res.statusCode === 200) {
          let json;
          try {
            json = JSON.parse(`${d}`);
          } catch (e) {
            console.log(e);
          }

          for (let i = 0; i < json.length; i += 1) {
            console.log(`${json[i].id} ${json[i].name}`);
          }
        }
      });
    });

    req.on('error', (e) => {
      console.error(e);
    });
    req.end();

    break;

  case 'read':
    options = {
      hostname: 'lidemy-book-store.herokuapp.com',
      port: 443,
      path: `/books/${input2}`,
      method: 'GET',
    };

    req = https.request(options, (res) => {
      res.on('data', (d) => {
        if (res.statusCode === 200) {
          let json;
          try {
            json = JSON.parse(`${d}`);
          } catch (e) {
            console.log(e);
          }
          console.log(json.name);
        }
      });
    });

    req.on('error', (e) => {
      console.error(e);
    });

    req.end();

    break;

  case 'delete':
    options = {
      hostname: 'lidemy-book-store.herokuapp.com',
      port: 443,
      path: `/books/${input2}`,
      method: 'DELETE',
    };

    req = https.request(options, (res) => {
      res.on('data', () => {
        if (res.statusCode === 200) {
          console.log(`id:${input2} 刪除成功！！！`);
        }
      });
    });

    req.on('error', (e) => {
      console.error(e);
    });

    req.end();
    break;

  case 'create':
    data = JSON.stringify({
      id: '',
      name: input2,
    });

    options = {
      hostname: 'lidemy-book-store.herokuapp.com',
      port: 443,
      path: '/books',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    };

    req = https.request(options, (res) => {
      res.on('data', (d) => {
        if (res.statusCode === 201) {
          let json;
          try {
            json = JSON.parse(`${d}`);
          } catch (e) {
            console.log(e);
          }
          console.log(`新增成功：id: ${json.id}, name: ${json.name}`);
        }
      });
    });

    req.on('error', (e) => {
      console.error(e);
    });
    req.write(data);
    req.end();

    break;

  case 'update':
    data = JSON.stringify({
      name: input3,
    });

    options = {
      hostname: 'lidemy-book-store.herokuapp.com',
      port: 443,
      path: `/books/${input2}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    };

    req = https.request(options, (res) => {
      res.on('data', (d) => {
        if (res.statusCode === 200) {
          let json;
          try {
            json = JSON.parse(`${d}`);
          } catch (e) {
            console.log(e);
          }
          console.log(`更新成功：id:${json.id}, name:${json.name}`);
        }
      });
    });

    req.on('error', (e) => {
      console.error(e);
    });
    req.write(data);
    req.end();
    break;

  default:
    console.log('輸入的參數不正確... 參數格式：[ list, read, delete, create, update ]');
    break;
}
