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
    let tempIndexHolder;
    let tempHaystack;

    let recurse = (pool, stone) => {
        if (pool.length === 0 && stone.length === 0) {
            return tempIndexHolder;
        }
        if (pool[0] === stone[0]) {
            tempHaystack = pool.split(1);
            recurse(pool.split(1), stone.split(1));
        }
        if ()
    }
    

    return -1;
};

(function test() {
    let vari = strStr("hello","ll")
    console.log(vari)
})()