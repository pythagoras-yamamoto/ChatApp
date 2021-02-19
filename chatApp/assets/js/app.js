// 送信ボタンの取得
let sendBtn = document.getElementById('sendBtn');
//　メッセージの送信者を判定するためのキー
let messangerKey = true;

// 送信ボタンがクリックされたときの処理
sendBtn.addEventListener('click', function() {
  
  //インプットを取得
  let inputMessage = document.getElementById('inputMessage');
  let messageText = inputMessage.value;
  
  //メッセージを作成
  let messageBox = createMessageBox();
  let message = createMessageText(messageText);

  // チャット画面にメッセージを出力
  messageBox.appendChild(message);
  let room = document.getElementById('room');
  room.appendChild(messageBox);

  // 次のアクションに備えるための処理
  inputMessage.value = '';
  messangerKey = !messangerKey;
})


//  メッセージ用のボックスを作成
function createMessageBox() {

  let messageBox = document.createElement('div');
  // 誰が送信者か判定しボックス作成
  if (messangerKey) {
    messageBox.classList.add('box-right');
  } else {
    messageBox.classList.add('box-left');
  }
  return messageBox;
}

//メッセージのテキストを作成
function createMessageText(messageText) {

  let message = document.createElement('p');
  message.textContent = messageText;
  message.classList.add('message-box');
  // 誰が送信者か判定しテキスト作成
  if(messangerKey) {
    message.classList.add('green');
  } else {
    message.classList.add('white');
  }

  return message;
}


