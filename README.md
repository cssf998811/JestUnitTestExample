# Unix test 單元測試

檔案說明
---
```
|- additionCalculator.js          數字相加的程式
|- additionCalculator.test.js     數字相加的測試腳本
```

原則
---
1. 沒寫測試以前不能寫任何程式邏輯
2. 一次只寫出一個沒通過的測試
3. 讓這個測試通過(DONE IS BETTER THAN PERFECT)
4. 只有在測試通過時 才能重構程式
5. 直到已經沒有其他測試了
6. Perfect!

撰寫測試
---
```javascript
test("addition of 4 and 6 to equal 10", () => {
    expect(additionCalculator(4, 6)).toBe(10);
});
```
* 測試的目標為何？ -> test('...', ()=>{})
* 導入要測試的函式 -> additionCalculator()
* 測試的期望是什麼？ -> expect(...).toBe(...);


執行測試
---
只有一個測試時 或者在pakage.json有設定"test": "jest --watchAll"
```
yarn test
```
如果有很多測試的話，也可以指定執行測試的檔案
```
yarn test additionCalculator.test.js
```

執行完會出現類似的訊息
```
$ jest additionCalculator.test.js
 PASS  ./additionCalculator.test.js
  √ addition of 4 and 6 to equal 10 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.269 s, estimated 1 s
Ran all test suites.
Done in 2.94s.
```
Reference:
* [Test-Driven Development Tutorial – How to Test Your JavaScript and ReactJS Applications](https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/)
* [TDD入門](https://hackmd.io/@taichunmin/slide-tdd-intro#/)
* [十分鐘上手前端單元測試 - 使用 Jest](https://www.casper.tw/development/2020/02/02/jest-intro/)
