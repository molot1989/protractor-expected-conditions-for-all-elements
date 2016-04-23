module.exports =  {
    presenceOfAll: function (elementArrayFinder) {
        return function () {
            return elementArrayFinder.count(function (count) {
                return count > 0;
            });
        };
    }
}
