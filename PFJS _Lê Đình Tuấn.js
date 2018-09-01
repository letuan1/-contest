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

    this.setter = function (element) {
        this.dataStore[this.listSize++] = element;
    };

    this.getter = function () {
        console.log("tin bạn muốn xem là : " + this.toString())
    };

    this.find = function (element) {
        for (i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    };

    this.remove = function (element) {
        var fountAT = this.find(element);
        if (fountAT > -1) {
            this.dataStore.splice(fountAT, 1);
            this.delete();
            console.log("đã xoá tin ")
        } else {
            console.log("tin mà bạn muốn xoá không tồn tại")
        }
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
            if (this.dataStore[i] == element) {
                this.new.getter()
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
        } else {
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

var CArray = function () {
    this.dataStore = [];
    this.pos = 0;

    this.setData = function () {
        for (var i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    };

    this.insert = function (element) {
        this.dataStore[this.pos++] = element;
    };

    this.toString = function () {
        var restr = "";
        for (var i = 0; i < this.dataStore.length; i++) {
            restr += "ngày đăng : " + this.dataStore + "<br>"
            if (i > 0 && i % 10 == 0) {
                restr += "\n";
            }
        }
        return restr;
    };
    this.swap = function (arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };

    this.selectionSort = function () {
        var min, temp;
        for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
            min = outer;
            for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            this.swap(this.dataStore, outer, min);
            document.write(this.toString() + "<br/>");
        }
    }
};

var news = new New();
var list = new List();
var sorfs = new CArray();
news.setList();
list.setNew(news);

function ter() {
    var appen = prompt("hãy nhập ngày đăng tin");
    console.log(list.toString());
    var settr = prompt("thêm tin tức")
    news.setter(settr);
    list.append(appen);
    sorfs.insert(appen, settr);
}

function getter() {
    news.getter()
}

function remove() {
    list.remove(prompt("nhập số thứ tự tin mà bạn muốn xoá"))
    news.remove(prompt("nhập tin mà bạn muốn xoá"))
}


function find() {
    list.find2(prompt("hãy nhập ngày đăng tin mà bạn muốn tìm"))
}

function sorf() {
    sorfs.setData()
    sorfs.selectionSort()
}
