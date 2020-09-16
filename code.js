const add = function(a, b){
    return a + b
}

const calculateHyp = function(a,b){
    return Math.sqrt((a * a) + (b * b));
}

const removeBugs = function (code) {
    return code.filter(c => c != "BUG")
}

const clearLowPriority = function (array) {
    return array.filter(obj => obj.priority = 'HIGH')
}



class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}


class ArrayManipulator {
    manipulate(arr1, arr2) {
        let obj = {}
        for (let i in arr1) {
            obj[i] = arr2[i]
        }
        return obj
    }
}

module.exports = add
module.exports = calculateHyp
module.exports = removeBugs
module.exports = clearLowPriority
module.exports = PictureManager
module.exports = ArrayManipulator
