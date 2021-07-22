function getavorbv() {
  var vid = document.getElementById("v").value;
  console.log(vid);

  var video = "https://tenapi.cn/bv/?id=" + vid;
  console.log(video);

  $.ajax({
    url: "https://tenapi.cn/bv/",
    data: { id: vid },
    type: "get",
    success: function (res) {
      console.log(res.code);
    },
  });
}

  