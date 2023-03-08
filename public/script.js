$(function () {
  var chatLog = $(".chat-log");
  var messageInput = $("#message-input");
  var sendButton = $("#send-button");

  sendButton.click(function () {
    var message = messageInput.val();
    if (message !== "") {
      sendMessage(message);
      messageInput.val("");
    }
  });

  function sendMessage(message) {
    var timestamp = new Date().toLocaleTimeString();
    var messageDiv =
      '<div class="message">' +
      '<div class="message-header">' +
      '<span class="timestamp">' +
      timestamp +
      '</span>' +
      '<span class="user">' +
      'You' +
      '</span>' +
      '</div>' +
      '<div class="message-body">' +
      message +
      '</div>' +
      '</div>';
    chatLog.append(messageDiv);
    chatLog.scrollTop(chatLog[0].scrollHeight);
  }

  // Example message received from server
  var receivedMessage = "Hello! How can I help you today?";
  sendMessage(receivedMessage);
       });
  
