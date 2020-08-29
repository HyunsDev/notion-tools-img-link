function copylink() {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
function golink() {
  var imglink = btoa($("#img_link").val());
  var hyperlink = btoa($("#hyper_link").val());
  var theme = $("#theme").val();
  if (theme == "다크모드") {
    theme = "black";
  } else {
    theme = "white";
  }
  var output = `https://hyunsdev.github.io/notion-tools-img-link/block/?theme=${theme}&img=${imglink}&link=${hyperlink}`;
  $("#output").val(output);
  copylink();
  alert("링크가 복사되었습니다.");
}
