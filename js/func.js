function openTV() {
    window.open("https://live.bilibili.com/1785182");
}

function searchByName() {
    table = document.getElementById("songList");
    let ele;
    while ((ele = table.firstChild)) {
        ele.remove();
    }

    input = document.getElementById("songName").value.toUpperCase();

    for (var key in songs) {
        if (key.toUpperCase().indexOf(input) > -1) {
            for (var datas in songs[key]) {
                let lis = document.createElement('li')
                lis.setAttribute('class', 'list-group-item list-group-item-light');
                lis.setAttribute('onclick', 'copySong(this)');
                lis.innerHTML = songs[key][datas] + "——" + key;
                table.appendChild(lis);
            }
        }
        else {
            for (var datas in songs[key]) {
                if (songs[key][datas].toUpperCase().indexOf(input) > -1) {
                    let lis = document.createElement('li')
                    lis.setAttribute('class', 'list-group-item list-group-item-light');
                    lis.setAttribute('onclick', 'copySong(this)');
                    lis.innerHTML = songs[key][datas] + "——" + key;
                    table.appendChild(lis);

                }
            }
        }
    }
}

function getSongs() {
    table = document.getElementById("songList");
    let ele;
    while ((ele = table.firstChild)) {
        ele.remove();
    }

    for (var key in songs) {
        console.log(key);
        for (var datas in songs[key]) {
            let lis = document.createElement('li')
            lis.setAttribute('class', 'list-group-item list-group-item-light');
            lis.setAttribute('onclick', 'copySong(this)');
            lis.innerHTML = songs[key][datas] + "——" + key;
            table.appendChild(lis);
        }
    }
}
getSongs();

function copySong(name) {
    var songname = name.innerText;
    name.setAttribute("data-clipboard-text", "点歌 " + songname.substring(0, songname.indexOf('——')));
    copytext(name);
    var toast = new auiToast();
    toast.success({
        title: "复制成功",
        duration: 1000
    });
}

function copytext(data) {
    var clipboard = new ClipboardJS(data);// 如果你的项目是 bootstrap框架，请使用这个 
    clipboard.on('success', function (e) {
        clipboard.destroy();
    });
    clipboard.on('error', function (e) {
        console.log(e);
        clipboard.destroy();
    });
    data.click();
}