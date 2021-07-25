function getavorbv() {
  var vid = document.getElementById("v").value;
  console.log(vid);

  var video = "https://tenapi.cn/bv/?id=" + vid;
  console.log(video);

  // 发送 GET 请求（默认的方法）
  //bili = axios(video);
  //console.log(bili)

  fetch(video)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}
