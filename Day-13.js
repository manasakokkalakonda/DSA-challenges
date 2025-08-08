//100Days ofcode
//Day-13

//Longest productive streak (Real-World Sliding Window Scenerio)
function slidingWindow(arr,k){
    let maxStreak=0;
    for(let i=0;i<arr.length;i++){
        let currentCount=0;
        for(let j=i;j<arr.length;j++){
            if(arr[j]==0){
                currentCount++;
            }
            if(currentCount>k)break;
                let length=j-i+1;
            maxStreak = Math.max(maxStreak, length);   
        }

    }
    return maxStreak;
}
console.log(slidingWindow([1, 0, 1, 1, 0, 0, 1, 1, 1, 0],2))

