var WebSocket = require('ws')
var key = require('./key')
var fetch = require('node-fetch')

var HASHTAG_SOCKETS = "C9VETKNL8"

fetch('https://slack.com/api/rtm.connect?token=' + key.slack + '&pretty=1')
  .then(r => r.json()).then(j => openSocket(j.url))

openSocket = (url) => {
  ws = new WebSocket(url);

  ws.on('open', () => {
  });

  ws.on('close', closeEvent => {
    console.log(closeEvent)
  });

  ws.on('message', message => {
    j = JSON.parse(message)
    // if it's a message && on the channel, send a DM


    if (j.type == 'message' && j.channel == HASHTAG_SOCKETS) {
      // ws.send to the user, and as a DM
      console.log(`${j.user}: ${j.text}`)
      if (j.text.includes('elevator')) {
        //sendWrongElevatorCode()
      } else {
        sendDMToUser(j.user, j.message)
      }
    }
  });

  const sendDMToUser = (user, message) => {
    fetch('https://slack.com/api/im.list?token=' + key.slack).then(r => r.json()).then(response => {
      const channel = response.ims.find(im =>im.user === user)
      if (channel) {
        text = `hi <@${user}>`
        console.log(text)
         ws.send(JSON.stringify({
          "id": 1,
          "type": "message",
          "channel": channel.id,
          "text": text
        }))
      }
    })
  }

  const sendWrongElevatorCode = () => {
    ws.send(JSON.stringify({
     "id": 1,
     "type": "message",
     "channel": HASHTAG_SOCKETS,
     "text": "Elevator Code: 10001"
   }))
  }

  ws.on('error', errorEvent => {
    console.log(errorEvent)
  });
}
