var New = function () {
    this.listSize = 0;
    this.dataStore = [];
    this.list = null;

    this.delete = function (element) {
        this.dataStore[this.listSize--] = element;
    };

    this.setList = function (_list) {
        this.list = _list;
    };

    this.getList = function () {
        return this.list;
    };

    this.setter  = function (element) {
        this.dataStore[this.listSize++] = element;
    };

    this.getter = function () {
        console.log("tin bạn muốn xem là : " + this.toString())
    };

    this.getTer2 = function () {
        console.log("tin bạn muốn tìm : " + this.toString())
    };

    this.toString = function () {
        return this.dataStore
    };
};

var List = function () {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.new = null;
    this.find = find;
    this.toString = toString;
    this.length = length;
    this.moveTo = moveTo;
    this.length = length;
    this.status = true

    this.setNew = function (_new) {
        this.new = _new;
    };

    this.getNew = function () {
        return this.new;
    };

    this.append = function (element) {
        this.dataStore[this.listSize++] = element;
    };

    this.find = function (element) {
        for (i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    };

    this.find2 = function (element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element){
                this.new.getTer2();
            } else {
                console.log("không có tin mà bạn tìm");
            }
        }
    };

    this.remove = function (element) {
        var fountAT = this.find(element);
        if (fountAT > -1) {
            this.dataStore.splice(fountAT, 1);
            this.new.delete();
            console.log("đã xoá tin ")
        }else {
            console.log("tin mà bạn muốn xoá không tồn tại")
        }
    };

    this.lenght = function () {
        return this.listSize;
    };

    this.toString = function () {
        return this.dataStore;
    };

    this.front = function () {
        this.pos = 0;
    };

    this.end = function () {
        this.pos = this.listSize - 1;
    };

    this.prev = function () {
        if (this.pos > 0) {
            --this.pos;
        }
    };

    this.next = function () {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    };

    this.currPos = function () {
        return this.pos;
    };

    this.moveTo = function (position) {
        this.pos = position;
    };

    this.getElement = function () {
        return this.dataStore[this.pos];
    };
};

var news = new New();
var list = new List();
news.setList();
list.setNew(news);

function ter () {
    list.append(prompt("hãy nhập ngày đăng tin"));
    console.log(list.toString());
    news.setter(prompt("thêm tin tức"));
}

function getter() {
    news.getter()
}

function remove() {
    list.remove(prompt("nhập số thứ tự tin mà bạn muốn xoá"))
}


function find() {
    list.find2(prompt("ngày đăng tin mà bạn muốn tìm"))
}