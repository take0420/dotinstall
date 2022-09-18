'use strict';
{
  //お知らせに便利
  // alert('hello');

  //ユーザーに確認を求める
  const answer = confirm('削除しますか？');
  if (answer) {
    console.log('削除しました');
  } else {
    console.log('キャンセルしました');
  }

}