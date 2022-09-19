'use strict';
{
// 今、匿名で文章を投稿できる SNS を作っていると仮定。
// 投稿が複数あるため、まずは配列を作り、その中に文章と「いいね」の数を管理するオブジェクトを複数生成。
  const posts = [
    {

      text: 'JavaScriptの勉強中...',
      likeCount: 0, // いいね 0
    //↑短縮Ver.
     show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
   },
    },

    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
     },
    },
  ];

  // show(posts[0]);
  posts[0].show();
  posts[1].show();
}