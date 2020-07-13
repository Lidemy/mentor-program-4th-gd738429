const request = require('request');
const process = require('process');

const input1 = process.argv[2];
const input2 = process.argv[3];
const input3 = process.argv[4];

switch (input1) {
  case 'list':
    request(
      'https://lidemy-book-store.herokuapp.com/books?_limit=20',
      (err, response, body) => {
        let json;
        try {
          json = JSON.parse(body);
        } catch (e) {
          console.log(e);
        }
        for (let i = 0; i < json.length; i += 1) {
          console.log(`${json[i].id} ${json[i].name}`);
        }
      },
    );
    break;

  case 'read':
    request(
      `https://lidemy-book-store.herokuapp.com/books/${input2}`,
      (err, response, body) => {
        if (response.statusCode === 404) {
          console.log('輸入格式有誤,請重新輸入');
        } else {
          let json;
          try {
            json = JSON.parse(body);
          } catch (e) {
            console.log(e);
          }
          console.log(json.name);
        }
      },
    );
    break;

  case 'delete':
    request.delete(
      `https://lidemy-book-store.herokuapp.com/books/${input2}`,
      (err, response) => {
        if (response.statusCode === 404) {
          console.log('刪除格式有誤,請重新輸入');
        } else {
          console.log(`id:${input2} 刪除成功！！！`);
        }
      },
    );
    break;

  case 'create':
    request.post(
      {
        url: 'https://lidemy-book-store.herokuapp.com/books',
        form: {
          id: '',
          name: input2,
        },
      },
      (err, response, body) => {
        if (response.statusCode === 404) {
          console.log('新增格式有誤,請重新輸入');
        } else {
          let json;
          try {
            json = JSON.parse(body);
          } catch (e) {
            console.log(e);
          }
          console.log(`新增成功：id:${json.id}, name:${json.name}`);
        }
      },
    );
    break;

  case 'update':
    request.patch(
      {
        url: `https://lidemy-book-store.herokuapp.com/books/${input2}`,
        form: {
          id: input2,
          name: input3,
        },
      },
      (err, response, body) => {
        if (response.statusCode === 404) {
          console.log('更新格式有誤,請重新輸入');
        } else {
          let json;
          try {
            json = JSON.parse(body);
          } catch (e) {
            console.log(e);
          }
          console.log(`更新成功：id:${json.id}, name:${json.name}`);
        }
      },
    );
    break;

  default:
    console.log('輸入的參數不正確... 參數格式：[ list, read, delete, create, update ]');
    break;
}
