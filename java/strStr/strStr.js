/* 
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:
Input: haystack = "", needle = ""
Output: 0
*/

var strStr = function(haystack, needle) {

    if (needle.length === 0) {
        return 0;
    }
    if ((haystack.length === 1 && needle.length === 1) && (needle[0] === haystack[0])) {
        return 0;
    }
    let tempIndexHolder;

    for (let i =0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            tempIndexHolder = i;
            let remainingStack = haystack.slice(i + 1)
            let remainingNeedle = needle.slice(1)
            for (let j = 0; j <= remainingStack.length; j++) {
                if (remainingNeedle[j] === remainingStack[j]) {
                    if (j + 1 === remainingNeedle.length) {
                        return tempIndexHolder
                    } else {
                        continue;
                    }
                } else {
                    tempIndexHolder = null;
                    break;
                }
            }
        }
    }

    return -1;
};

(function test() {
    let vari = strStr("a","a")
    console.log(vari)
})()