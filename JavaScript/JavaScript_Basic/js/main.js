'use strict';
{
//ユーザーから名前を受取り。それを大文字にする処理
  // const name = 'taguchi';
//本当は数値を入力するとエラーになるが、それでも実行したい場合 => 例外処理( try {} )をする。
  
  try {
    console.log(name.toUpperCase());
  } catch (e) {
    console.log(e);
  }
//処理完了のメッセージ
  console.log('Finish!');
}