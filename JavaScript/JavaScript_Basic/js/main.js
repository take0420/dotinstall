'use strict';
{
// 今、匿名で文章を投稿できる SNS を作っていると仮定。
// 投稿が複数あるため、まずは配列を作り、その中に文章と「いいね」の数を管理するオブジェクトを複数生成。
  const posts = [
    {

      text: 'JavaScriptの勉強中...',
      likeCount: 0, // いいね 0
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
    },
  ];
  // post を受け取ったら、その post の text と likeCount プロパティを表示。
  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`);
  }

  show(posts[0]);
}