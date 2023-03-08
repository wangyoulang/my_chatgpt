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

    const fetch = require('node-fetch');
    const http = require('http');
    const HttpProxyAgent = require('http-proxy-agent');
    const proxy = new HttpProxyAgent('http://<proxy_host>:<proxy_port>');

    async function getChatResponse(input) {
      const url = 'https://chat.openai.com/chat';
      const apiKey = process.env.API_KEY;

      const body = {
        prompt: input,
        temperature: 0.7,
        max_tokens: 60,
        stop: '\n'
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(body),
        agent: proxy
      });

      const result = await response.json();
      chatLog.append(result.choices[0].text.trim());
      chatLog.scrollTop(chatLog[0].scrollHeight);
    }
  }

  // Example message received from server
  var receivedMessage = "Hello! How can I help you today?";
  sendMessage(receivedMessage);
       });
  
