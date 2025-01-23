
let results = JSON.parse(localStorage.getItem('result')) || {
    wins: 0,
    lose: 0,
    tie: 0
}



function hello(player) {
    let random = Math.random() * 100;
    let computer = '';
    if (random <= 30) {
        computer = 'Rock'
    } else if (random > 30 && random <= 60) {
        computer = 'Paper'
    } else {
        computer = 'Scissor'
    }


    let innerResult = '';

    if (computer === 'Rock') {
        if (player === 'Rock') {
            results.tie += 1;
            innerResult = 'Tie'
            moves(computer, player);
            result(innerResult)
        } else if (player === 'Scissor') {
            results.lose += 1;
            innerResult = 'lose'
            moves(computer, player);
            result(innerResult)
        } else if (player === 'Paper') {
            results.wins += 1;
            innerResult = 'won'
            moves(computer, player);
            result(innerResult)
        }
    } else if (computer === 'Paper') {
        if (player === 'Rock') {
            results.lose += 1;
            innerResult = 'lose'
            moves(computer, player);
            result(innerResult)
        } else if (player === 'Scissor') {
            results.wins += 1;
            innerResult = 'won'
            moves(computer, player);
            result(innerResult)
        } else if (player === 'Paper') {
            results.tie += 1;
            innerResult = 'Tie'
            moves(computer, player);
            result(innerResult)
        }
    } else if (computer === 'Scissor') {
        if (player === 'Scissor') {
            results.tie += 1;
            innerResult = 'Tie'
            moves(computer, player);
            result(innerResult)
        } else if (player === 'Paper') {
            results.lose += 1;
            innerResult = 'lose'
            moves(computer, player);
            result(innerResult)
        } else if (player === 'Rock') {
            results.wins += 1;
            innerResult = 'won'
            moves(computer, player);
            result(innerResult)
        }
    }

    localStorage.setItem('result', JSON.stringify(results));
    update()


}
function update() {
    let p = document.getElementById('hello');
    p.innerHTML = `Wins:${results.wins}     loss:${results.lose}      tie:${results.tie}`
}
update()



function moves(computer, player) {
    document.querySelector('.moves').innerHTML = `You
<img class="im" src="images/${player}-200x187.png" alt="">
<img class="im" src="images/${computer}-200x187.png" alt="">
Computer`;

}
function result(y) {
    document.querySelector('.result').innerHTML = y;
}

