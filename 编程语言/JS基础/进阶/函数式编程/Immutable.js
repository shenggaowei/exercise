var Immutable = require('immutable');

var decrementHP = function (player) {
    return player.set("hp", player.hp - 1);
};

var isSameTeam = function (player1, player2) {
    return player1.team === player2.team;
};

var punch = function (player, target) {
    if (isSameTeam(player, target)) {
        return target;
    } else {
        return decrementHP(target);
    }
};

var jobe = Immutable.Map({ name: "Jobe", hp: 20, team: "red" });
var michael = Immutable.Map({ name: "Michael", hp: 20, team: "green" });

punch(jobe, michael);
//=> Immutable.Map({name:"Michael", hp:19, team: "green"})