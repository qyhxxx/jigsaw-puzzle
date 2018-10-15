var imgs = document.getElementsByClassName('img')
var go_arrs = [
    '#', [2, 4], [1, 3, 5], [2, 6], [1, 5, 7], [2, 4, 6, 8],
    [3, 5, 9], [4, 8], [5, 7, 9], [6, 8]
]

for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
        var id = this.id
        var src = this.src
        var loc_index = id.substr(3, 1)
        var img_index = src.substr(src.length - 5, 1)
        if (img_index != 9) {
            var go_arr = go_arrs[loc_index]
            for (var i = 0; i < go_arr.length; i++) {
                var go = document.getElementById('img' + go_arr[i])
                if (go.src.substr(go.src.length - 5, 1) == 9) {
                    this.src = go.src
                    go.src = src
                    setTimeout(() => {
                        if (check()) {
                            document.getElementById('successMsg').innerText = '恭喜你,挑战成功啦！'
                        }
                    }, 100);
                }
            }
        }
    }
}

function check() {
    for (var i = 0; i < imgs.length; i++) {
        var id = imgs[i].id
        var src = imgs[i].src
        var loc_index = id.substr(3, 1)
        var img_index = src.substr(src.length - 5, 1)
        if (loc_index != img_index) {
            return false
        }
    }
    return true
}

function randomize() {
    for (var i = 1; i <= imgs.length; i++) {
        var rand_num = parseInt(Math.random() * 9 + 1)
        var cur = document.getElementById('img' + i)
        var go = document.getElementById('img' + rand_num)
        var temp_class = cur.className
        var temp_src = cur.src
        cur.className = go.className
        cur.src = go.src
        go.className = temp_class
        go.src = temp_src
    }
    document.getElementById('successMsg').innerText = ''
}

randomize()

function init() {
    for (var i = 1; i <= imgs.length; i++) {
        var img = document.getElementById('img' + i)
        var src = img.src
        var src_pre = src.substr(0, src.length - 5)
        img.src = src_pre + i + '.jpg'
        img.className = 'img'
    }
    document.getElementById('successMsg').innerText = ''
}