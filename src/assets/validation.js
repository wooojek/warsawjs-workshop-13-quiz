'use strict';
let data = [
    {
        id: 1,
        title: "best car?",
        answers: [{
            id: 1,
            content: "ford",
            correct: false
        }, {
            id: 2,
            content: "fiat",
            correct: false
        }, {
            id: 3,
            content: "tesla",
            correct: false
        }, {
            id: 4,
            content: "GM",
            correct: true
        }

        ]
    }, {
        id: 2,
        title: "Worst car?",
        answers: [{
            id: 1,
            content: "ford",
            correct: false
        }, {
            id: 2,
            content: "fiat",
            correct: true
        }, {
            id: 3,
            content: "tesla",
            correct: false
        }, {
            id: 4,
            content: "GM",
            correct: false
        }

        ]
    }];

function check(qid, aid) {
    let q = data.find(question => question.id === qid);
    if (q) {
        let a = q.answers.find(answer => answer.id === aid);
        if (a && a.correct) {
            return true;
        } else {
            return false;
        }
    }
}

export default check;