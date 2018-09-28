
class App {
  constructor() {
    this.server = 'http://parse.atx.hackreactor.com/chatterbox/classes/messages';
    this.friends = {};
  }

  init() {}

  send(data) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

  fetch() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      contentType: 'application/json',
    });

  }
  
  
  clearMessages() {
    $('#chats').empty();
  }
  
  renderMessage(message) {
    let str = `<div class='${message.username} username' >${message.username} : ${message.text}</div>`;
    $('#chats').append(str);
  }
  
  renderRoom(roomName) {
    // $(".main").append($(".room"))
    $('#roomSelect').append(`<option value="${roomName}">${roomName.toUpperCase()}</option>`);
  }

  handleUsernameClick() {
    $('#chats').on('click', '.username', function(event) {
      alert('hello');
    });
  }
}

var app = new App();
