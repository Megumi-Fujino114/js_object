console.log("----------関数---------------");
// 関数の書き方
// function 関数名 (){
// 	処理

// }

function myalert(){
// alert("自作関数からhello!")
// アラートを表示したあとにも自由に処理を追加できる。
// 	confirm("このボタン押してもいいですか？");
// confirmはOKとキャンセルが出る
// ｱﾗｰﾄはokだけ

// let hantei = confirm("このボタンを押してもいいですか？")
// console.log(hantei)

// 問題
// OKが押されたら「大丈夫」キャンセルが押されたら「やり直し」
// ｺﾝｿｰﾙに表示する


// let hantei = confirm("このボタンを押していいですか？")
//  console.log(hantei);
//  if (hantei === true) {
//     console.log('大丈夫');
// 	}else{
// 	console.log("やり直し");
// 	}

// let messageSpan = document.getElementById("message");
// messageSpan.textContent = "変わりました";
// messageSpan.style.color = "blue";
// }

// 問題
// OKが押されたら「大丈夫」キャンセルが押されたら「やり直し」
// ブラウザに表示する

// let messageSpan = document.getElementById("message");
// 	messageSpan.textContent = "大丈夫";
// } if(messageSpan !== 0){
//  	messageSpan.textContent = "やり直し";
// }

//
let messageSpan = document.getElementById("message");
let hantei = confirm("このボタンを押していいですか？");
 console.log(hantei);
 if (hantei === true) {
    console.log('大丈夫');
    messageSpan.textContent = "大丈夫";
    messageSpan.style.color = "blue";
    messageSpan.style.fontSize = "20px";
	}else{
	console.log("やり直し");
	messageSpan.textContent = "やり直し";
	messageSpan.style.color = "red";
	messageSpan.style.fontSize = "50px";
	}
}

console.log("----------関数(引数付き)-------------");
// 関数の書き方
// function 関数名 (引数1,引数2,...){
// 	処理
// }

// 関数とは複数の処理を一つにまとめて名前をつけたもの
// 引数とは処理を行う為に必要な情報
// alert(表示したい文字)この場合、表示したい文字が引数にあたる
function myalert2(displayMessage){
	alert(displayMessage);
}


// 以下の関数を作成して作成した関数を実行してください
// 関数名：printHoge
// 処理内容：[Hoge]とコンソールに表示する
function printHoge(msg){
	console.log(msg);
}

// 作った関数を実行
printHoge("Hoge");

// 以下の関数を作成して作成した関数を実行してください
// 関数名；printNum
// 引数は；1つの数値
// 処理内容；引数で受け取った数値を出力する
function printNum(msg){
 console.log(msg)
}
printNum(1);

//
//

// function printNum(msg){
// 	if(printNum ==)
//  console.log(msg)
// }
// printNum("大丈夫");

// 以下の関数を作成して作成した関数を実行してください
// 関数名；printKuku
// 引数；一つの引数
// 処理内容；引数で受け取った数値の九九（1～9までかけた数）をコンソールに表示する
// 引数に1を指定したら、1の段の計算がコンソールに表示されるようになる
// 引数に2を指定したら、2の段の計算がコンソールぶ表示されるようになる

console.log("----------関数(引数付き)-------------");

 function printKuku(Kuku){
for (let i = 1; i <= 9; i++)
	 console.log(i * Kuku);
}
console.log("1の段");
printKuku(1);
console.log("2の段");
printKuku(2);


console.log("----------関数(引数付き)-------------");

function printKuku(num){
let kotae = num*1;
	 console.log(kotae);
    kotae = num*2;
     console.log(kotae);
 }
 printKuku(4);
// これでも出来る
console.log("----------関数(引数付き)-------------");

// 関数名；printKakezan
// 引数；2つの数字
// 処理内容；引数で受け取った2つの数字のかけ算の答えをコンソールに表示する

function printKakezan(num1,num2){
	console.log(num1 * num2);
}
printKakezan(3,5);

console.log("----------関数(引数付き)-------------");
// 関数名；printIsEven
// 引数；1つの引数
// 処理内容；引数で受け取った数値が偶数の場合は「偶数です」と表示し
// 処理内容；引数で受け取った数値が奇数の場合は「奇数です」と表示

function printIsEven(num){
if (num % 2 === 0) {
    console.log(num + "は偶数です");
} else {
    console.log(num + "は奇数です");
 }
}
printIsEven(3);

console.log("----------関数(引数付き)-------------");
// 関数名；printMessage
// 引数1；1つの文字列
// 引数２；１つ数字
// 処理内容；引数で受け取った文字列を引数で受け取った数値分繰り返し出力する

function printMessage(moji,num){
	for (let i = 1;i <= num; i++)
    	 console.log(moji);
}
printMessage("たこ焼き",5)
printMessage("炭火焼",3)

//

console.log("----------宿題56-------------");
// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printMaxNum
// 引数1：1つの数値
// 引数2：1つの数値
// 処理内容：引数で受け取った2つの数値のうち、最も大きな数値を出力する。
function printMaxNum(num1,num2){
	if(num1 > num2){
		console.log(num1)
	}else{
		console.log(num2)
	}
}
printMaxNum(5,8);

console.log("----------宿題57-------------");

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：getSquared
// 引数1：1つの数値
// 処理内容：引数で受け取った数値の2乗を計算し返す
function getSquared(num){
	console.log(num*num);
}
getSquared(5);

console.log("----------宿題57違う回答-------------");

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：getSquared
// 引数1：1つの数値
// 処理内容：引数で受け取った数値の2乗を計算し返す

// // 実行結果
// 16

//戻り値（返り値）return 値;の形で実行した場合に戻される値
//引数と逆方向に値を送る

function getSquared(num){
	return num*num;
}

var result = getSquared(8);
console.log(result);




console.log("----------宿題58-------------");

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：createSelfIntroductionText
// 引数1：1つの文字列
// 処理内容：「私の名前は○○です」という文字の〇〇を引数で受け取った文字列にし返す

function createSelfIntroductionText(moji){
 console.log("私の名前は"+ moji+"です")
}

createSelfIntroductionText("メグミ");




console.log("----------宿題58違う回答----------");

function createSelfIntroductionText(name) {
    var msg = "私の名前は" + name + "です";
    return msg;
}

var message = createSelfIntroductionText("NexSeed");
console.log(message);

console.log("----------宿題59-------------");

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：isEvenNumber
// 引数1：1つの数値
// 処理内容：引数で渡された値が偶数の場合は true、そうでない場合は false を返す。
function isEvenNumber(num){
	if(num % 2 ==0){
		console.log(true);
	}else{
		console.log(false);
	}
}

isEvenNumber(5);


console.log("----------宿題59の違う回答----------");

function isEvenNumber(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var result = isEvenNumber(3);
console.log(result);


console.log("----------宿題60-------------");

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：isSeedKun
// 引数1：任意の文字列
// 処理内容：引数で渡された文字列が「SeedKun」の場合は true、そうでない場合は false を返す。
function isSeedKun(moji){
	if(moji == "Seedkun"){
		console.log(true);
	}else{
		console.log(false);
	}
}
isSeedKun("Seedkun");


console.log("----------宿題60の違う回答-------------");

function isSeedKun(str) {
    if (str == "SeedKun") {
        return true;
    } else {
        return false;
    }
}

var result = isSeedKun("SeedKun");
console.log(result);




console.log("----------練習問題1-----------");

let i = 9
if (i % 2 ===0){
	console.log(`${i}は偶数です`)
}else{
	console.log(`${i}は奇数です`)
}

console.log("----------練習問題2-----------");

let math = 60;
let english = 100;
let total = math + english;
if (math >=60 && english >= 60 && total >=140 ){
	console.log("合格");
}else{
	console.log("不合格");
}

console.log("----------練習問題3-----------?????");
let res = 0;
let numbers = [1, 3, 4, 5, 8, 9, 3, 3];
for(let i = 0; i > 8 ; i++){
	if (numbers[i] === 3){
		res = res + 1;
	}
}console.log(res);


// for(let i = 0; i < 9; i++){
// 	if (numbers[i]=== 3){
// 		res = res + 1;
// 	}
// }console.log(res);

console.log("----------練習問題4-----------");

for(let i = 0; i <= 10 ; i++){
	console.log(i*3);
}

console.log("----------練習問題5-----------");
for(let i = 1 ; i <= 100 ; i++){
   if(i % 5 ===0 && i % 3 ===0 ){
   	console.log("Fizzbuzz");
   }else if(i % 5 === 0){
   	console.log("Buzz");
   }else if(i % 3 === 0){
   	console.log("Fizz");
   }else{
   	console.log(i);
   }
 }

 console.log("----------練習問題6-----------");
 for(let i = 1;i <= 9;i++)
 	for(let j = 1;j <= 9;j++){
 		console.log(i*j);
 	}


 console.log("----------練習問題7-----------");
  for(let i = 1;i <= 9;i++){
 	for(let j = 1;j <= 9;j++){
 		let res =  i * j;
 	 if(res >= 30){
 	 	continue;
   }
	console.log(res);
  }
}


// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     let res = i * j;
//     if (res >= 30) {
//       continue;
//     }
//     console.log(res);
//   }
// }

 console.log("----------練習問題8-----------");
 let customer ={age:2,gender:"male"};
  if(customer["age"] <= 3 ){
  	console.log("入れます");
  }else if(customer["gender"] === "female"){
  	console.log("入れます");
  }else{
  	console.log("入れません");
  }