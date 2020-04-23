const queueVoter = document.querySelector('.queueVoter');
const keys = queueVoter.querySelector('.voteButton');
var voteArray = [];
const maxArrayLength  = 5;


keys.addEventListener('click', e => {

    // Används matches??
    if (e.target.matches('button')) {
        const key = e.target;
        const keyContent = key.textContent;

        if(voteArray.length < maxArrayLength) {
            let vote = {queueLength: parseInt(keyContent) , time:Date.now()};
            voteArray.push(vote);
        }
        else {
            voteArray.shift();
            let vote = {queueLength: parseInt(keyContent) , time:Date.now()};
            voteArray.push(vote)
        }
        console.log(voteArray)

    }
});