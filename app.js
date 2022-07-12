const express = require("express")
const Notification = require("./notifications.js")

const app = express();

app.get("/one-user", function(req, res){
  res.send("Sending Notification to one user...");

  const data ={
    tokenId: "cJvOKp-8Q1aXV8zwkLrbXv:APA91bHAZy5PeESXVUYsJFNScsRKZOH64U-NE8_lWc-qU_Qz7MnaVeasg-7H3SZg47qsvzSWaiiXnFVGkUTBMM9OYs94LxBaXYSCec3ikXqO5c1ZXUYHpv-cGKgsIw8qR0Yj2eHQRuL7",
    title: "Alerta de Accidente de Transito",
    message: "Se produjo un accidente"
  }
  Notification.sendPushToOneUser(data);
})

app.get("/topic", function(req, res){
  res.send("Sending Notification to one user...");
  const data ={
    tokenId: "test",
    titulo: "Re:codigo",
    mensaje: "Message from nodejs to one user"
  }
  Notification.sendPushToTopic(data);
})

app.get("/", function(req, res){
  res.send("Success")
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000")
})