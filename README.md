#JSPraBasic
JSの基礎~文法中心の学習記録です。

・'use strictについて
エラーチェックのために必ず記載

・他ファイルからの実行
※scriptは閉じタグを忘れない
<!-- ex)<script src="js/main.js"></script> -->

・''と””,\や\n,\t,+の使い方など

・四則演算
数字の優先度ほぼ数学と同じ
先に計算したいところは()で囲う

・定数と変数
定数は再代入不可
※ルール
英数字、$、_、のみで数値から始められない
×let may-name ,let 0price
大文字小文字は区別される
予約語は使えない
×let const;

・変数の計算略称など
++; --+
+=,-=,*=,/=

・データ型

・string型と数字の計算parseInt

・真偽値の判定について
=,===
false - 0,null,undifined,'',false
true  - それ以外

・条件分岐
命令の終わりには;を付けるルールだが。命令ががブロックで終わる場合には;を付けない

・条件演算子
条件式　? trueの処理 :falseの処理

・論理演算子
&& なおかつ(AND)
|| もしくは(OR)
! 〜ではない(NOT)

・switch文,for文、while文
条件をしっかり書く無限ループ注意

do while(条件に待たさない場合でも最初は処理を行う)
///
hp = -50

do{
    console.log(`HP：${hp}`)
    hp -=10
}while(hp >0)
///

・テンプレートリテラル
``(バッククオート)と${}

・continueとbreak

・関数と引数、初期値

●VScode関連

・複製
shift+option+↓

・参照
commandとクリック