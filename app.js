
// instanciate the application

new Vue ({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isGameStarted: false,
  },
  methods: {
    startGame: function () {
      this.isGameStarted = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      this.playerHealth -= this.calculateDamage(3, 10);
      this.monsterHealth -= this.calculateDamage(3, 10);
      if (this.checkWin()){
        return
      }
    },
    specialAttack: function () {
      this.monsterHealth -= this.calculateDamage(10, 20);
      if (this.checkWin()){
        return
      }
      this.monsterAttacks();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttacks();
    },
    giveUp: function () {
      this.isGameStarted = false;
    },
    monsterAttacks: function () {
      this.playerHealth -= this.calculateDamage(5, 12)
      this.checkWin();
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin: function () {
      if (this.playerHealth <= 0) {
        if (confirm('You lost! Try again')) {
          this.startGame();
        } else {
          this.isGameStarted = false;
        }
      } else if (this.monsterHealth <= 0) {
        if (confirm('You win!! Sweeet')) {
          this.startGame();
        } else {
          this.isGameStarted = false;
        }
      }
      return false
    }
  }
});
