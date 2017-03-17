/*jslint node: true, nomen: true*/
'use strict';
var permutations,
    _ = require('lodash');




//permutations = function (arr) {
//    var perms = [],
//        temp,
//        temp2,
//        len = arr.length,
//        x,
//        y;
//
//    if (len === 1) {
//        return arr;
//    }
//
//    for (x = 0; x < len; x += 1) {
//        temp = permutations(_.clone(arr).splice(x, 1));
//        for (y = 0; y < temp.length; y += 1) {
//            temp[y].push(arr[x]);
//        }
//        perms.push(temp);
//    }
//    return perms;
//};

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}

function permutations(input) {
    var counter = [],
        perms = [],
        temp = [],
        chars = input,
        length = chars.length,
        i;

    for (i = 0; i < length; i += 1) {
        counter[i] = 0;
    }

    perms.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            temp = swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i] = counter[i] + 1;
            i = 0;
            perms.push(_.clone(temp));
        } else {
            counter[i] = 0;
            i += 1;
        }
    }

    return perms;
}

var test = [1, 2, 3, 4];

console.dir(permutations(test));


//void swap(char *x, char *y)
//{
//    char temp;
//    temp = *x;
//*x = *y;
//*y = temp;
//}
//
///* Function to print permutations of string
// This function takes three parameters:
// 1. String
// 2. Starting index of the string
// 3. Ending index of the string. */
//void permute(char *a, int l, int r)
//{
//    int i;
//    if (l == r)
//        printf("%s\n", a);
//    else
//    {
//        for (i = l; i <= r; i++)
//        {
//            swap((a+l), (a+i));
//            permute(a, l+1, r);
//            swap((a+l), (a+i)); //backtrack
//        }
//    }
//}
//
///* Driver program to test above functions */
//int main()
//{
//    char str[] = "ABC";
//    int n = strlen(str);
//    permute(str, 0, n-1);
//    return 0;
//}

(function (exports) {
    'use strict';
    var permutations = (function () {

        var res;

        function swap(arr, i, j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        function permutations(arr, current) {
            if (current >= arr.length) {
                return res.push(arr.slice());
            }
            for (var i = current; i < arr.length; i += 1) {
                swap(arr, i, current);
                permutations(arr, current + 1);
                swap(arr, i, current);
            }
        }

        /**
         * Finds all the permutations of given array.<br><br>
         * Permutation relates to the act of rearranging, or permuting,
         * all the members of a set into some sequence or order.
         * For example there are six permutations of the set {1,2,3}, namely:
         * (1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), and (3,2,1).<br><br>
         * Complexity: O(N*N!).
         *
         * @example
         *
         * var permutations = require('path-to-algorithms/src/' +
         * console.log(result);
         *
         * @module combinatorics/permutations
         * @public
         * @param {Array} arr Array to find the permutations of.
         * @returns {Array} Array containing all the permutations.
         */
        return function (arr) {
            res = [];
            permutations(arr, 0);
            var temp = res;
            // Free the extra memory
            res = null;
            return temp;
        };
    }());

    exports.permutations = permutations;

}((typeof window === 'undefined') ? module.exports : window));
