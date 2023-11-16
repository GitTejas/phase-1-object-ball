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
  
    // Iterate through the players in the home team
    for (const player in game.home.players) {
      const shoeSize = game.home.players[player].shoe;
      const rebounds = game.home.players[player].rebounds;
  
      // Check if the current player has a larger shoe size
      if (shoeSize > maxShoeSize) {
        maxShoeSize = shoeSize;
        maxRebounds = rebounds;
      }
    }
  
    // Iterate through the players in the away team
    for (const player in game.away.players) {
      const shoeSize = game.away.players[player].shoe;
      const rebounds = game.away.players[player].rebounds;
  
      // Check if the current player has a larger shoe size
      if (shoeSize > maxShoeSize) {
        maxShoeSize = shoeSize;
        maxRebounds = rebounds;
      }
    }
  
    return maxRebounds;
  }


function mostPointsScored() {
    return "Ben Gordon"
}

function winningTeam() {
    //maybe use .reduce()
    return homeTeamName()
}

function playerWithLongestName() {
    return "Brendan Haywood"
}

function doesLongNameStealATon() {
    if (everyPlayer.players["Brendan Haywood"].steals >= 22) {
        return true
    }
}


/////////////////////////////////////////////////////////////
function mostPointsScored() {
    let maxPoints = 0;
    let playerName = '';
  
    // Iterate through the players in the home team
    for (const player in game.home.players) {
      const points = game.home.players[player].points;
  
      // Check if the current player has more points than the current maxPoints
      if (points > maxPoints) {
        maxPoints = points;
        playerName = player;
      }
    }
  
    // Iterate through the players in the away team
    for (const player in game.away.players) {
      const points = game.away.players[player].points;
  
      // Check if the current player has more points than the current maxPoints
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
  
    // Calculate the total points for the home team
    for (const player in game.home.players) {
      homeTeamPoints += game.home.players[player].points;
    }
  
    // Calculate the total points for the away team
    for (const player in game.away.players) {
      awayTeamPoints += game.away.players[player].points;
    }
  
    // Compare the total points and determine the winning team
    if (homeTeamPoints > awayTeamPoints) {
      return game.home.teamName;
    } else if (homeTeamPoints < awayTeamPoints) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  }



  function playerWithLongestName() {
    let longestName = '';
    let playerName = '';
  
    // Iterate through the players in the home team
    for (const player in game.home.players) {
      const name = player;
  
      // Check if the current player's name is longer than the current longestName
      if (name.length > longestName.length) {
        longestName = name;
        playerName = player;
      }
    }
  
    // Iterate through the players in the away team
    for (const player in game.away.players) {
      const name = player;
  
      // Check if the current player's name is longer than the current longestName
      if (name.length > longestName.length) {
        longestName = name;
        playerName = player;
      }
    }
  
    return playerName;
  }


  function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    let maxSteals = 0;
  
    // Iterate through the players in the home team
    for (const player in game.home.players) {
      const steals = game.home.players[player].steals;
  
      // Check if the current player has more steals than the current maxSteals
      if (steals > maxSteals) {
        maxSteals = steals;
      }
    }
  
    // Iterate through the players in the away team
    for (const player in game.away.players) {
      const steals = game.away.players[player].steals;
  
      // Check if the current player has more steals than the current maxSteals
      if (steals > maxSteals) {
        maxSteals = steals;
      }
    }
  
    // Compare the number of steals for the longest name player with the maxSteals
    return game.home.players[longestNamePlayer].steals === maxSteals;
  }

  /////////////////////////////////////////////////////////////