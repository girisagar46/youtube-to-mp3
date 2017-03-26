var btn_id = 'download-mp3';

function checkButton() {
    var button = document.getElementById(btn_id);
    if (button === null) {
        addButton();
    }
}

function addButton() {
    var cont = document.getElementById('watch7-user-header');
    var btn = document.createElement('button');
    btn.id = btn_id;
    btn.setAttribute('type', 'button');
    btn.setAttribute('title', 'Download MP3 of current video');
    btn.setAttribute('data-tooltip', 'Download MP3 of current video');
    btn.setAttribute('data-tooltip-title', 'Download MP3 of current video');
    btn.setAttribute('class', 'yt-subscription-button yt-uix-button yt-uix-button-subscribe-branded');
    btn.style.marginLeft = '10px';
    var txt = document.createElement('span');
    txt.setAttribute('id','stpdownload');      
    txt.appendChild(document.createTextNode('Download MP3'));
    txt.setAttribute('class', 'yt-uix-button-content');
    btn.appendChild(txt);
    btn.addEventListener('click',downloadmp3, true);
    cont.appendChild(btn);
}


  function downloadmp3(){
	var link = document.getElementById('watch7-content').firstChild.baseURI;
    var dwnld = "//www.youtubeinmp3.com/fetch/?video="+link
    var aTag = document.createElement('a');
    aTag.setAttribute('href', dwnld);
    aTag.click();
    return null;
}

window.setInterval(checkButton, 1000);