const admin = require ("firebase-admin")

function initFirebase() {
  const serviceAccount = require (__dirname + "/fir-examen-2d59f-firebase-adminsdk-qvs41-8df35c04d8.json");
  admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseUrl: "https://fir-examen-2d59f-default-rtdb.firebaseio.com/"
  });
}

initFirebase();

function sendPushToOneUser (notification){
  const message = {
    token: notification.tokenId,
    data: {
      title: notification.title,
      message: notification.message
    }
  }
  sendMesssage (message)
}

function sendPushToTopic (notification){
  const message = {
    token: notification.topic,
    data: {
      titulo: notification.titulo,
      mensaje: notification.mensaje
    }
  }
  sendMesssage (message)
}

module.exports = {sendPushToOneUser,sendPushToTopic}

function sendMesssage(message){
  admin.messaging().send(message)
    .then((response) =>{
      console.log("Successfully sent message:", response);
    })
    .catch((error) =>{
      console.log("Error sending message:", error)
    })
}