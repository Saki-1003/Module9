const socket = io();

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const usernameForm = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    //Show message on the screen immediately after pressing "Send" or enter
    createMessage(input.value)
    input.value = '';
  }
});
usernameForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (usernameInput.value) {
    socket.emit('change username', usernameInput.value);
    usernameInput.value = '';
  }
});

socket.on('chat message', (msg) => {
  createMessage(msg)
});

socket.on('server message', (msg) => {
  createMessage(msg, 'centredText')
});
socket.on('usersTyping', (usersTyping) => {
  if(usersTyping.length) {
    const typingText = `${usersTyping.join(',')} ${usersTyping.length===1? 'is': 'are'} typing.`
    document.getElementById('usersTyping').textContent = typingText
    console.log(typingText)
  } else {
    document.getElementById('usersTyping').textContent = ' '
  }
})
socket.on('usersOnline', (usersOnline) => {
  document.getElementById('usersOnline').textContent = `usersOnline: ${usersOnline.join(',')}`
})

function createMessage(msg, className="") {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
}

let typingTimout;

function userIsTyping() {
  socket.emit('start typing')
  if(typingTimout) {
    clearTimeout(typingTimout)
    typingTimout = null
  }
  typingTimout = setTimeout(()=>{
    socket.emit('user stopped typing')
  }, 2000)
}


