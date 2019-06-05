/**
 * @name JLinq
 * @description A minor implementation of Linq like functionalities in JavaScript.
 * @version 1.0.2
 * @author d4n1.551
 */

//Add Linq like range to javascript arrays
if (!Array.range) {
    /**
    * @name range
    * @typedef Array
    * @description Returns the elements which in an array which fall into the given range. eg: let arr2 = arr.range(5,10);
    * @param {number} start Start Index.
    * @param {number} end End Index.
    */
    Array.prototype.range = function (start, end) {
        let result = [];
        let i = 0;
        for (i = start - 1; i < end; i++) {
            result.push(this[i]);
        }
        return result;
    };
}

//Add Linq like skip to javascript arrays
if (!Array.prototype.skip) {
    /**
    * @name skip
    * @typedef Array
    * @description Returns the elements which after skipping a given amount of elements. eg: let arr2 = arr.skip(5);
    * @param {number} noOfElementsToSkip The number of elements to skip.
    */
    Array.prototype.skip = function (noOfElementsToSkip) {
        let result = [];
        let i = 0;
        for (i = noOfElementsToSkip; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };
}

//Add Linq like skip to javascript arrays
if (!Array.prototype.take) {
    /**
    * @name take
    * @typedef Array
    * @description Returns the first elements which amounts to noOfElementsToTake. eg: let arr2 = arr.take(5);
    * @param {number} noOfElementsToTake The number of elements to take.
    */
    Array.prototype.take = function (noOfElementsToTake) {
        let result = [];
        let i = 0;
        for (i = 0; i < noOfElementsToTake; i++) {
            result.push(this[i]);
        }
        return result;
    };
}

//Add Linq like first to javascript arrays
if (!Array.prototype.first) {
    /**
    * @name first
    * @typedef Array
    * @description Returns the first element which match a given predicate. eg: let val = arr.first(x => x > 1);
    * @param {Function} predicate The predicate function to compare elements against.
    */
    Array.prototype.first = function (predicate) {

        if (predicate) {
            let i = 0;
            for (i = 0; i < this.length; i++) {
                if (predicate(this[i])) {
                    return this[i];
                }
            }
        } else {
            if (this[0])
                return this[0];
        }

        return null;
    };
}

//Add Linq like last to javascript arrays
if (!Array.prototype.last) {
    /**
    * @name first
    * @typedef Array
    * @description Returns the last element which match a given predicate. eg: let val = arr.last(x => x > 1);
    * @param {Function} predicate The predicate function to compare elements against.
    */
    Array.prototype.last = function (predicate) {
		let lastItem =  null;
        if (predicate) {
            let i = 0;
            for (i = 0; i < this.length; i++) {
                if (predicate(this[i])) {
                    lastItem =  this[i];
                }
            }
        } else {
            if (this[0])
                return this[this.length - 1];
        }

        return lastItem;
    };
}

//Add Linq like where to javascript arrays
if (!Array.prototype.where) {
    /**
    * @name where
    * @typedef Array
    * @description Returns elements which match a given predicate. eg: let arr2 = arr.where(x => x > 1);
    * @param {Function} predicate The predicate function to compare elements against.
    */
    Array.prototype.where = function (predicate) {
        let result = [];
        let i = 0;
        for (i = 0; i < this.length; i++) {
            if (predicate(this[i])) {
                result.push(this[i]);
            }
        }

        return result;
    };
}

//Add Linq like all to javascript arrays
if (!Array.prototype.all) {
    /**
    * @name all
    * @typedef Boolean
    * @description Returns whether all elements match a given predicate. eg: let arr2 = arr.where(x => x > 1);
    * @param {Function} predicate The predicate function to compare elements against.
    */
    Array.prototype.all = function (predicate) {
        let result = 0;
        let i = 0;
        for (i = 0; i < this.length; i++) {
            if (predicate(this[i])) {
                result++;
            }
        }

        return result === this.length;
    };
}

//Add Linq like all to javascript arrays
if (!Array.prototype.any) {
    /**
    * @name any
    * @typedef boolean
    * @description Returns whether any elements match a given predicate. eg: let arr2 = arr.where(x => x > 1);
    * @param {Function} predicate The predicate function to compare elements against.
    */
    Array.prototype.any = function (predicate) {
        if (!predicate)
            return this.length > 0;
        else {
            let result = 0;
            let i = 0;
            for (i = 0; i < this.length; i++) {
                if (predicate(this[i])) {
                    result++;
                    break;
                }
            }

            return result > 0;
        }
    };
}

//Add linq like select to javascript arrays
if (!Array.prototype.select) {
    /**
    * @name select
    * @typedef Array
    * @description Selects a different set from an Array. eg: let arr2 = arr.select((x, index) => i + ': ' + x.otherProperty);
    * @param {Function} selector The logic by which to select the elements.
    */
    Array.prototype.select = function (selector) {
        let result = [];
        let i = 0;
        for (i = 0; i < this.length; i++) {
            result.push(selector(this[i], i))
        }

        return result;
    };
}

//Add linq like with to javascript arrays
if (!Array.prototype.with) {
    /**
    * @name with
    * @typedef Array
    * @description Selects the combination of multiple arrays. eg: let all = arr.select([arr2,arr3,arr4,arr5]);
    * @param {Array} arrays The arrays to merge together.
    */
    Array.prototype.with = function (arrays) {
        let i = 0;

        for (i = 0; i < arrays.length; i++) {
            let j = 0;
            for (j = 0; j < arrays[i].length; j++)
                this.push(arrays[i][j])
        }

        return this;
    };
}

//Add linq like intersect to javascript arrays
if (!Array.prototype.intersect) {
    /**
    * @name intersect
    * @typedef Array
    * @description Selects the matching set from two arrays. eg: let arr3 = arr.intersect(arr2);
    * @param {Array} secondArray The second array to compare against.
    */
    Array.prototype.intersect = function (secondArray) {
        let result = [];

        let iAmSmaller = this.length <= secondArray ? true : false;
        let i = 0;
        if (iAmSmaller) {
            for (i = 0; i < this.length; i++) {
                if (secondArray.includes(this[i])) {
                    result.push(this[i]);
                }
            }
        } else {
            for (i = 0; i < secondArray.length; i++) {
                if (this.includes(secondArray[i])) {
                    result.push(secondArray[i]);
                }
            }
        }

        return result;
    };
}

//Add Linq like except to javascript arrays
//if (!Array.prototype.except) {
//    /**
//    * @name except
//    * @typedef Array
//    * @description Selects the different set from two arrays. eg: let arr3 = arr.intersect(arr2);
//    * @param {Array} secondArray The second array to compare against.
//    * @param {function} equityComparer The Comparer to use.
//    */
//    Array.prototype.except = function (secondArray, equityComparer) {
//        let result = [];
//        let i = 0;
//        for (i = 0; i < this.length; i++) {
//            if (equityComparer) {
//                if (!equityComparer(this[i], secondArray))
//                    result.push(this[i]);
//            }else if (!secondArray.includes(this[i]))
//                result.push(this[i]);
//        }
//        return result;
//    };
//}

//Add linq like sum to javascript arrays
if (!Array.prototype.sum) {
    /**
    * @name sum
    * @typedef number
    * @description Gets the sum of all elements in the array. eg: var sm = arr.sum();
    */
    Array.prototype.sum = function () {
        let result = 0;
        let i = 0;
        for (i = 0; i < this.length; i++)
            result += this[i];

        return result;
    };
}

//Add linq like intersect to javascript arrays
if (!Array.prototype.average) {
    /**
    * @name sum
    * @typedef number
    * @description Gets the average of all elements in the array. eg: var avg = arr.average();
    */
    Array.prototype.average = function () {
        let result = 0;
        let i = 0;
        for (i = 0; i < this.length; i++)
            result += this[i];

        return result / this.length;
    };
}

//Add linq like forEach to javascript arrays
if (!Array.prototype.forEach) {
    /**
    * @name forEach
    * @typedef void
    * @description Run a function on every element. eg: arr.forEach((x,index) => console.log(x + ' at index:' + i));
    * @param {Function} func
    */
    Array.prototype.forEach = function (func) {
        let i = 0;
        for (i = 0; i < this.length; i++) {
            func(this[i], i);
        }
    };
}

//Add linq like sum to javascript arrays
if (!Array.prototype.sum) {
    /**
    * @name sum
    * @typedef number
    * @description Gets the sum of all elements in an array. eg: var l = arr.sum();
    * @param {function(number)} number
    */
    Array.prototype.sum = function () {
        let i = 0;
        this.forEach(x => i = i + x);
        return i;
    };
}

//Add linq like orderBy to javascript arrays
if (!Array.prototype.orderBy) {
    /**
    * @name orderBy
    * @typedef Array
    * @description Orders all elements in an array according to a selector. eg: arr = arr.orderBy(x => x.item);
    * @param {function()} selector
    */
    Array.prototype.orderBy = function (selector) {
        selector = selector || (x => x);
        let getElem = aObj => { return { key: selector(aObj), value: aObj } };
        let dict = this.select(x => getElem(x));
        let keys = dict.select(x => x.key).sort();
        this.length = 0;
        keys.forEach(x => {
            let dElem = dict.first(y => y.key === x);
            let i = dict.indexOf(dElem);
            this.push(dElem.value);
            dict.splice(i, 1);
        });
        return this;
    };
}

//Add linq like orderByDescending to javascript arrays
if (!Array.prototype.orderByDescending) {
    /**
    * @name orderByDescending
    * @typedef Array
    * @description Orders all elements in reverse order in an array according to a selector. eg: arr = arr.orderByDescending(x => x.item);
    * @param {function()} selector
    */
    Array.prototype.orderByDescending = function (selector) {
        selector = selector || (x => x);
        let getElem = aObj => { return { key: selector(aObj), value: aObj } };
        let dict = this.select(x => getElem(x));
        let keys = dict.select(x => x.key).sort().reverse();
        this.length = 0;
        keys.forEach(x => {
            let dElem = dict.first(y => y.key === x);
            let i = dict.indexOf(dElem);
            this.push(dElem.value);
            dict.splice(i, 1);
        });
        return this;
    };
}

//Add string join to join an array of strings seperated by a joiner
if (!String.join) {
    /**
    * @name join
    * @typedef string
    * @description Join an array of strings seperated by a joiner
    * @param {string} joiner The string to put in between each element.
    * @param {Array} stringArray The array of strings to join.
    */
    String.join = function (joiner, stringArray) {
        let result = '';
        stringArray.forEach(x => result += x + joiner);

        let removeUpto = result.length - joiner.length;
        return result.substring(0, removeUpto);
    }
}

//Add string format to format a string in accordance with some parameters
if (!String.format) {
    /**
    * @name format
    * @typedef string
    * @description Format a string in accordance with some parameters. eg: var str = String.format('"{0} World". {0} World is Hello World in {1}', ['Hola','Spanish']); This outputs the following text: '"Hola World". Hola World is Hello World in Spanish'
    * @param {string} str The string to format.
    * @param {Array} fillers The format fillers.
    */
    String.format = function (str, fillers) {
        let result = '';
        fillers.forEach((x, index) => str = str.replaceAll('{' + index.toString() + '}', x));
        return str;
    }
}

//Add replace all occurences functionality to strings
if (!String.prototype.replaceAll) {
    /**
    * @name replaceAll
    * @typedef String
    * @description Replace all occurences of a specified text in a string with a given replacement. eg: var str = "Hello, Hello World in English".replaceAll('Hello', 'Bonjour').replaceAll('English', 'French'); This outputs the following text: 'Bonjour, Bonjour World in French'.
    * @param {string} oldText The old text to be replaced.
    * @param {string} newText The new text to replace with.
    */
    String.prototype.replaceAll = function (oldText, newText) {
        let str = this;
        while (str.includes(oldText))
            str = str.replace(oldText, newText);
        return str;
    };
}