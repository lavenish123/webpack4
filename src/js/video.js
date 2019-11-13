function myVideo(videosrc) {
    document.getElementById('srcvideo').src = videosrc;
    $('#myModalvideo').modal('show');
    $("#srcvideo")[0].src += "&autoplay=1";
}
window.myVideo = myVideo;

$('#myModalvideo').on('hidden.bs.modal', function(e) {
    console.log('video close');
    var rawVideoURL = $("#srcvideo")[0].src;
    rawVideoURL = rawVideoURL.replace("&autoplay=1", "");
    $("#srcvideo")[0].src = rawVideoURL;
});


