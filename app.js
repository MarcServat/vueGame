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

    },
    heal: function () {

    },
    giveUp: function () {

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
