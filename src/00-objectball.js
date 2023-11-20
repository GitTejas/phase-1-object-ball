function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },

            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        }
    }
    }

const game = gameObject();



function homeTeamName() {
    return game.home.teamName
  }

  function awayTeamName() {
    return game.away.teamName
  }

  function homePlayers() {
    return game.home.players
  }

  function awayPlayers() {
    return game.away.players
  }

    const everyPlayer = {
        players: {
        "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
        },
        "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
        },
        "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
        },
        "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
        },
        "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
        },
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            },
    }
  }

  function allPlayers() {
    return everyPlayer
  }

function numPointsScored(name) {
    return everyPlayer.players[name].points
}

function shoeSize(name) {
    return everyPlayer.players[name].shoe
}

function teamColors(team) {
    if (team === "Brooklyn Nets") {
        return game.home.colors
    }
    else if (team === "Charlotte Hornets") {
        return game.away.colors
    }
}

function teamNames() {
    const hTeam = game.home.teamName;
    const aTeam = game.away.teamName;
    return [hTeam, aTeam];
}
  

function playerNumbers(teamName) {
  const team = game.home.teamName === teamName ? game.home : game.away;
  const playerNumbers = Object.values(team.players).map(player => player.number);
  return playerNumbers;
}


function playerStats(name) {
    return everyPlayer.players[name]
}


function bigShoeRebounds() {
    let maxShoeSize = 0;
    let maxRebounds = 0;
  
    for (const player in game.home.players) {
      const shoeSize = game.home.players[player].shoe;
      const rebounds = game.home.players[player].rebounds;
  
      if (shoeSize > maxShoeSize) {
        maxShoeSize = shoeSize;
        maxRebounds = rebounds;
      }
    }
  
    for (const player in game.away.players) {
      const shoeSize = game.away.players[player].shoe;
      const rebounds = game.away.players[player].rebounds;
  
      if (shoeSize > maxShoeSize) {
        maxShoeSize = shoeSize;
        maxRebounds = rebounds;
      }
    }
  
    return maxRebounds;
  }

  
  function mostPointsScored() {
    let maxPoints = 0;
    let playerName = '';
    for (const player in game.home.players) {
      const points = game.home.players[player].points;
      
        if (points > maxPoints) {
        maxPoints = points;
        playerName = player;
      }
    }
  
    for (const player in game.away.players) {
      const points = game.away.players[player].points;

      if (points > maxPoints) {
        maxPoints = points;
        playerName = player;
      }
    }
  
    return playerName;
  }


  function winningTeam() {
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (const player in game.home.players) {
      homeTeamPoints += game.home.players[player].points;
    }
  
    for (const player in game.away.players) {
      awayTeamPoints += game.away.players[player].points;
    }
  
    if (homeTeamPoints > awayTeamPoints) {
      return game.home.teamName;
    } else if (homeTeamPoints < awayTeamPoints) {
      return game.away.teamName;
    } 
  }


  function playerWithLongestName() {
    let longestName = '';
    let playerName = '';
  
    for (const player in game.home.players) {
      const name = player;
  
      if (name.length > longestName.length) {
        longestName = name;
        playerName = player;
      }
    }
    for (const player in game.away.players) {
      const name = player;
  
      if (name.length > longestName.length) {
        longestName = name;
        playerName = player;
      }
    }
  
    return playerName;
  }


  function doesLongNameStealATon() {
    if (everyPlayer.players["Brendan Haywood"].steals >= 22) {
        return true
    }
}