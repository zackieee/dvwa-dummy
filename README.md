# dvwa-dummy
#8 WEBサービスの代表的な脆弱性を理解する  

DVWAを使用したCSRF攻撃のデモ用ダミーサイトです。  

## 事前準備  
実行環境の準備を整えます。  

### DVWAの準備
1. ターミナルを起動し、下記のコマンドを実行してください。  
```
// Dockerのインストール
$ yum install docker
```

2. 続けて、下記のコマンドを実行し、DVWAイメージを取得します。
```
$ docker pull infoslack/dvwa 
```

3. 続けて、下記コマンドを実行し、Dockerを起動させます。
```
docker run -d -p 80:80 -p 3306:3306 -e MYSQL_PASS="mypass" infoslack/dvwa
```

4. ブラウザを立ち上げて`http://localhost/setup.php`にアクセスし、[create/Reset Database]ボタンをクリック。

5. ログイン画面が表示されるため、下記でログインする。  
```
ID: admin パスワード:password
```

6. [DVWA Security]をクリックして、SecurityLvelを[Low]に設定します。  

### DVWAダミーサイトの準備  
1. ローカルにクローン

2. クローンフォルダに移動

3. npm install

4. 下記コマンド実行
```
$ node ./bin/www
```

## 実行方法  
1. ブラウザで`http://localhost/login.php`にアクセスし、adminでログインしておく。  

2. ブラウザで`http://localhost:3000/vulnerabilities/csrf.html`にアクセスする。  

3. 上記ページの`new_password`/`confirn_new_password`を任意で入力し[Change]ボタンを押下する。  
（実行後、DVWAの同一ページに遷移し、DVWAのパスワードが変更されます）

4. 下記に出力された`debug.log`を開き、変更されたパスワード情報を取得する。  
 [クローンフォルダのパス]¥log¥debug.log  
 
 ```
 // ログ内容
 [2021-02-07T02:00:29.971] [DEBUG] SuccessExploitation - {
  password_new: 'password',
  password_conf: 'password',
  Change: 'Change'
}
 ```  
 
 5. 1.とは別のブラウザで`http://localhost/login.php`にアクセスし、admin/上記ログ記載のパスワードでログインする。  
 
 6. ログインに成功するはず...！！
