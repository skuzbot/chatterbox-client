
class App {
  constructor() {
    this.server = 'http://parse.atx.hackreactor.com/chatterbox/classes/messages';
    this.friends = {};
  }

  init() {
    $(".get-messages").on('click', function(event){
      this.fetch();
      console.log('hi')
    })
  }

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
    var request = $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        for(var i = 0; i < data.results.length; i++) {
          this.renderMessage(data.results[i]);
        }
        console.log('chatterbox: Message received');
        console.log(data.results[0]);  
        // {results:[... 100 arrays]}  
          // {objectId: "wlYrCX99Vc", username: "dan", text: "first", roomname: "lobby", createdAt: "2017-02-08T21:17:18.455Z", …}
        //App.renderMessage(data.results[0])
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
    // console.log(request)
    // var data = request.responseJSON.results  // array
    // this.renderMessage(data[0])

  }
  
  getMessages() {

  }
  
  clearMessages() {
    $('#chats').empty();
  }
  
  renderMessage(message) {
    let str = `<div class='username' >${message.username} : ${message.text}</div>`;
    $('#chats').append(str);

  }
  
  renderRoom(roomName) {
    // $(".main").append($(".room"))
    $('#roomSelect').append(`<option value="${roomName}">${roomName.toUpperCase()}</option>`);
  }

  handleUsernameClick() {
    $('#main').on('click', '.username', function(event) {
      console.log('need to add friend');
    });
  }
}

var app = new App();
