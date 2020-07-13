## 請以自己的話解釋 API 是什麼

API 是使用者想拿到某個特定資料時，可以提供該資料的窗口或是據點。用生活化的例子來比喻，假設我們要買最新的 iPhone XI ，不太可能直接到生產 iPhone 的工廠買，一定是要到專賣店或是有配合的電信商甚至是在網路上購買，那這些買得到的地方就是 iPhone 的 API 。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

401 Unauthorized ： 授權失敗拒絕存取，需要認證後才可存取資料
505 HTTP Version Not Supported ： 發送 request 的 http 版本太舊導致 server 端無法辨識
508 Loop Detected： Server 端處理 request 時發現有無窮迴圈而傳出錯誤代碼

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

URL:http://gd738429.restaurant.com (此網址不存在，僅示範用)
    說明       |  Method |  路徑  |  參數  |   範例
------------------------------------------------------------
回傳所有餐廳資料 | GET     | /stores  | count ｜ /stores?_count=10 
回傳單一餐廳資料 | GET     | /stores/:id |  無 ｜ /stores/15  
刪除餐廳       | DELETE  | /stores/:id |  無 ｜ /stores/15 
新增餐廳       | POST    | /stores  |  name ｜ 無 
更改餐廳       | PATCH   | /stores/:id | name | 無