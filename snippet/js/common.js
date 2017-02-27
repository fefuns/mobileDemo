(function (prmt, $) {
    /**
     * 数字前面自动补零
     * @param {Number} num 当前的数字
     * @param {Number} size 最终的位数
     * @returns {String}
     */

    prmt.addZeroPre = function (num, size) {
        var str;

        if (num >= Math.pow(10, size)) {
            // 如果num本身位数不小于size
            return num.toString();
        }
        str = new Array(size + 1).join('0') + num;

        return str.slice(str.length - size);
    };
    window.prmt = prmt;
})(window.prmt || {}, jQuery);

