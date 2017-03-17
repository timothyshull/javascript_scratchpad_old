// JavaScript Document

var downloadControllerUrl = "controller/FileDownloader.php";
$(document).ready(function (e) {

});


function showConfirmDialog(fileName, downloadId) {

    $(document.body).append('<div id="downloadBackground2232" style="background:rgba(102,102,102,.5);width:100%;height:100%;position:fixed;top:0px;left:0px" align="center"><!-- confirm dialog start--><div id="fileDownloadConfirmDiv2232"  style="margin-top:150px;width:500px;min-height:200px;height:auto; background:#FFFFFF;border-radius:5px 5px 5px 5px;border:#09F solid 1px;display:block"><div style="width:500px;min-height:70px;height:auto; background:#06F;border-radius:5px 5px 0px 0px;padding-top:1px;padding-bottom:1px;background: rgb(122,188,255); /* Old browsers */background: -moz-radial-gradient(center, ellipse cover, rgba(122,188,255,1) 0%, rgba(96,171,248,1) 44%, rgba(64,150,238,1) 100%); /* FF3.6+ */background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(122,188,255,1)), color-stop(44%,rgba(96,171,248,1)), color-stop(100%,rgba(64,150,238,1))); /* Chrome,Safari4+ */background: -webkit-radial-gradient(center, ellipse cover, rgba(122,188,255,1) 0%,rgba(96,171,248,1) 44%,rgba(64,150,238,1) 100%); /* Chrome10+,Safari5.1+ */background: -o-radial-gradient(center, ellipse cover, rgba(122,188,255,1) 0%,rgba(96,171,248,1) 44%,rgba(64,150,238,1) 100%); /* Opera 12+ */background: -ms-radial-gradient(center, ellipse cover, rgba(122,188,255,1) 0%,rgba(96,171,248,1) 44%,rgba(64,150,238,1) 100%); /* IE10+ */background: radial-gradient(ellipse at center, rgba(122,188,255,1) 0%,rgba(96,171,248,1) 44%,rgba(64,150,238,1) 100%); /* W3C */"><p id="pDownloadConfirmMessage22424" style="font-size:23px;color:#FFFFFF;text-shadow:#0099CC 0px -1px 0px;padding:0px">You are about to download ' + fileName + ' file. Please confirm.</p></div><div style="width:100%;height:auto; margin-top:30px;"><div class="button_no" style="float:right;margin-right:10px;"><button onclick="javascript:cancelDownload()">No, Thanks</button></div><div class="button_yes" style="float:right"><button onclick="javascript:confirmDownload(\'' + fileName + '\',' + downloadId + ')">Yes, Download</button></div></div></div><!-- confirm download end --><!-- download progress start --><div id="downloadProgressContainer2424" style="background:#FFFFFF;width:100%;height:auto;margin-top:200px;padding-top:10px;padding-bottom:10px;display:none" > <div style="height:20px;width:100%;margin-bottom:5px;" align="center"><p  id="pDownloadText3232" style="font-size:18px;">Starting download...</p></div><div class="progress_bar"><div id="progressBar_66232" style="margin-left:10px;margin-right:10px;"></div></div><div style="height:40px;width:100%;margin-top:5px;"><div class="button_no" style="float:right;margin-right:5px;"><button  id="btnAbortDownload23223" onclick="javascript:stopDownload(\'' + fileName + '\',' + downloadId + ')">Cancel Download</button></div></div></div><!-- download progress end --></div>');


    $(function () {
        $("button").button().click(function (event) {
            event.preventDefault();
        });
    });

    $(function () {
        $("#progressBar_66232").progressbar({
            value: 30
        });
    });


}

function confirmDownload(fileName, downloadId) {
    abortDownload = false;
    downloadStarted = false;
    $('#fileDownloadConfirmDiv2232').fadeOut(300);
    setTimeout(function () {
        $('#downloadProgressContainer2424').fadeIn(300);
        $('#progressBar_66232').progressbar("option", "value", false);
        //pDownloadText3232
        //progressBar_66232

        $.ajax({
            url: downloadControllerUrl,
            type: "GET",
            async: true,
            data: "",
            dataType: "text"/*text/json/html/xml*/

        }).done(function (data, textStatus, jqXHR) {
                window.location = downloadControllerUrl + "?download_id=" + downloadId;


                setTimeout(function () {
                    trackDownload(fileName, downloadId);
                }, 1000);


            })
            .fail(function (jqXHR, textStatus, errorThrown) {

            })
            .always(function (data, textStatus, jqXHR) {
            });


    }, 300);

}

function cancelDownload() {

    $('#downloadBackground2232').remove();
}

function stopDownload(fileName, downloadId) {
    abortDownload = true;
    $('#btnAbortDownload23223').button("option", "disabled", true);
    $('#progressBar_66232').progressbar("option", "value", false);
    $('#pDownloadText3232').text('Cancelling download..');


    $.ajax({
        url: downloadControllerUrl,
        type: "GET",
        async: true,
        data: {"cancel_download": 1},
        dataType: ""/*text/json/html/xml*/

    }).done(function (data, textStatus, jqXHR) {

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            $('#btnAbortDownload23223').button("option", "disabled", false);
            abortDownload = false;
        })
        .always(function (data, textStatus, jqXHR) {
        });


}

var abortDownload = false;
var downloadStarted = false;
function trackDownload(fileName, downloadId) {
    continueTracking = true;


    $.ajax({
        url: downloadControllerUrl,
        type: "GET",
        async: true,
        data: {"track_download": 1},
        dataType: "json"/*text/json/html/xml*/

    }).done(function (data, textStatus, jqXHR) {
            fileSize = data.current_file_size;
            downloadedSize = data.current_file_downloaded_bytes;
            down_status = data.down_status;


            if (down_status == 'downloading' && !abortDownload) {
                progress = Math.ceil(parseFloat(downloadedSize, 10) / parseFloat(fileSize, 10) * 10000) / 100.0;

                $('#progressBar_66232').progressbar("option", "value", progress);
                mbSize = Math.ceil((downloadedSize / (1024.0 * 1024.0)) * 100) / 100.00;

                $('#pDownloadText3232').text('downloading : ' + progress + "%, (" + mbSize + "MB downloaded)");

                downloadStarted = true;
            }
            else if (down_status == 'downloaded') {
                $('#progressBar_66232').progressbar("option", "value", 100);
                $('#pDownloadText3232').text("downloaded successfully");

                setTimeout(function () {
                    $('#fileDownloadConfirmDiv2232').fadeOut(300);
                    setTimeout(function () {
                        $('#downloadBackground2232').remove();
                    }, 300);
                }, 1000);

                continueTracking = false;
            }
            else if (down_status == 'aborted' && downloadStarted)//prevents executing aborted state at the begining by mistake
            {

                $('#progressBar_66232').progressbar("option", "value", 0);
                $('#pDownloadText3232').text("download was aborted...");

                setTimeout(function () {
                    $('#fileDownloadConfirmDiv2232').fadeOut(300);
                    setTimeout(function () {
                        $('#downloadBackground2232').remove();
                    }, 300);
                }, 1000);


                continueTracking = false;
                //hide
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            //alert('fail');
        })
        .always(function (data, textStatus, jqXHR) {
            if (continueTracking) {
                setTimeout(function () {
                    trackDownload(fileName, downloadId);
                }, 500);

            }

        });


}

function downloadError(fileName) {

}

