{
    function compress(s){
        let compressedStrArr = [];
        let count = 0;
        for(let i=0;i<s.length;i++){
            count++;
            if(i+1>= s.length || s[i]!==s[i+1]){
                compressedStrArr.push(s[i]);
                compressedStrArr.push(count);
                count = 0;
            }
        }
        return compressedStrArr.length<s.length? compressedStrArr.join(''): s;
    }
}

compress('aaabbccc');


*****************************************SOLUTION #2*******************************
    // Here we count the length of the compressed string before hand even before pushing the elements into the array. so that we can save the space.
    {
    function compress(s) {
        let countCompression = countCompression(s); // count what the compressed string length is going to be without building the total string
        if(countCompression>=s.length) return s; // if the compressed string length is greater than or equal we return the string itself
        let compressedStrArr = [];
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            count++;
            if (i + 1 >= s.length || s[i] !== s[i + 1]) {
                compressedStrArr.push(s[i]);
                compressedStrArr.push(count);
                count = 0;
            }
        }
        return compressedStrArr.length < s.length ? compressedStrArr.join('') : s;
    }

     // returns the total length of the compressed string without constructing the compressed string.
    function countCompression(s) {
        let count = 0;
        let compressedLen = 0;
        for (let i = 0; i < s.length; i++) {
            count++;
            if (i + 1 >= s.length || s[i] !== s[i + 1]) {
                compressedLen = compressedLen + 1 + String(count).length;
                count = 0;
            }
        }
        return compressedLen;
    }
}

countCompression('aaaaaaaaaabc');

