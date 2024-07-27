document.getElementById("RandomBtn").onclick = function(){
    const min = parseInt(document.getElementById('urRandomMin').value);
    const max = parseInt(document.getElementById('urRandomMax').value);
    if (isNaN(min) || isNaN(max)) {
        const alertnumprint = window.alert('Please enter valid numbers ');
    }
    if (min > max){
        const alertminbigerthenmax=window.alert('Min should be less than or equal to Max ');
    }
    const randomnum = Math.floor(Math.random() * (max-min + 1))+ min;

    document.getElementById("round").textContent = randomnum;
}