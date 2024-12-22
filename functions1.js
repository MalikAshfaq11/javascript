//for of loop
function countVowels(str){
    let count=0;
    for(let char of str){
        if(char=="a"|| char=="e" || char=="i" || char=="o" || char=="u" ){
            count++;
        }
    }
    console.log("count is:",count);
}
countVowels("hello");

//for loop
function count_vowels(string){
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string[i]=="a"|| string[i]=="e" || string[i]=="i" ||string[i]=="o" || string[i]=="u" ){
            count++;
        }
    }
    console.log("Number of vowels in a given string are:",count);
}
count_vowels("hello");