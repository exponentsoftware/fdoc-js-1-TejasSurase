
// find which word is more occured than other word

function countWords(paragraph,word1,word2)
{
    // split the string by spaces in a
let a = paragraph.split(" ");

// search for pattern in a
let count1 = 0;
let count2 = 0;
for (let i = 0; i < a.length; i++)
{
// if match found increase count
if (word1==(a[i]))
    count1++;

else if (word2==(a[i])){
    count2++;
}
}

 var ans = ""; 

if(count1 > count2 ) {
    ans = "The " + word1 + "is more frequently occurred than " +word2;
    
}
else{
    ans = "The " + word2 + "is more frequently occurred than " + word1
}
 return ans;

}




const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';


 console.log(countWords(paragraph, "love", "you"));