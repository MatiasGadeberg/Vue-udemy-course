const randRange = (max, min) => {
    return Math.floor(Math.random() * (max-min)) + min;
}

const healthBarColor = health => {
    if (health > 50) {
        return '#00a876'
    } else if (health > 25) {
        return '#d8db16'
    } else {
       return '#cc1407'
    }
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            specialAttackAvailable: true,
            roundsToSpecial: 0,
            winner: null,
            battleLog: [],
        }
    },
    watch: {
        roundsToSpecial(value) {
            if (value === 0) {
                this.toggleSpecial();
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'Draw'
            } else if (value <= 0) {
                this.winner = 'Player'
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'Draw'
            } else if (value <= 0) {
                this.winner = 'Monster'
            }
        }
    },
    computed: {
        monsterBarStyles() {
            let widthStr = '';
            if (this.monsterHealth < 0) {
                widthStr = '0%';
            } else {
                widthStr = this.monsterHealth + '%';
            }

            return {
                width: widthStr,
                backgroundColor: healthBarColor(this.monsterHealth)
            }
        },
        playerBarStyles() {
            let widthStr = '';
            if (this.playerHealth < 0) {
                widthStr = '0%';
            } else {
                widthStr = this.playerHealth + '%';
            }
            return {
                width: widthStr,
                backgroundColor: healthBarColor(this.playerHealth)
            }
        }
    },
    methods: {
        attackMonster() {
           const attackValue = randRange(12,5);
           this.monsterHealth -= attackValue;
           this.roundsToSpecial--;
           this.logEvent('player', 'attack', attackValue);
           this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = randRange(15,8);
            this.playerHealth -= attackValue;
            this.logEvent('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
           const attackValue = randRange(25,10);
           this.monsterHealth -= attackValue;
           this.roundsToSpecial = 2;
           this.toggleSpecial();
           this.logEvent('player', 'special', attackValue);
           this.attackPlayer();
        },
        healPlayer() {
            const healValue = randRange(20,8);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.logEvent('player', 'heal', healValue);
            this.attackPlayer();
            this.roundsToSpecial--;
        },
        resetGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.winner = null,
            this.roundsToSpecial = -1;
            this.specialAttackAvailable = true;
            this.battleLog = [];
        },
        surrender() {
            this.winner = 'Monster'
        },
        toggleSpecial() {
            this.specialAttackAvailable = !this.specialAttackAvailable;
        },
        logEvent(character, type, value) {
            
            if (type === 'heal') {
                logStr = `The ${character} healed ${value} hitpoints!`
            } else if (type === 'special') {
                logStr = `The ${character} used a special attack and dealt ${value} points of damage!`
            } else {
                logStr = `The ${character} attacked and dealt ${value} points of damage!`
            }
            
            this.battleLog.unshift({
                logType: 'log--' + character,
                value: logStr
            })
        }
    }
});

app.mount('#game');