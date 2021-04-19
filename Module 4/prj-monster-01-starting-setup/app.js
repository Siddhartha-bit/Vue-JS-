function getRandom(min, max) {
  const randomValue = Math.floor(Math.random() * (max - min) + min);
  return randomValue;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      counter: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    setPlayerBarHealth() {
      return { width: this.playerHealth + "%" };
    },
    setMonsterBarHealth() {
      return { width: this.monsterHealth + "%" };
    },
    setSpecialAttack() {
      if (this.counter >= 3) return false;
      else return true;
    },
  },
  watch: {
    playerHealth() {
      if (this.playerHealth === 0 && this.monsterHealth === 0)
        this.winner = "draw";
      else if (this.playerHealth === 0) this.winner = "monster";
    },
    monsterHealth() {
      if (this.playerHealth === 0 && this.monsterHealth === 0)
        this.winner = "draw";
      else if (this.monsterHealth === 0) this.winner = "player";
    },
  },
  methods: {
    startNewGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.counter = 0;
      this.winner = null;
      this.logMessages = [];
    },
    surrenderGame() {
      this.winner = "monster";
    },
    monsterAttack() {
      const playerDamage = getRandom(8, 15);
      this.playerHealth -= playerDamage;
      this.playerHealth = this.playerHealth < 0 ? 0 : this.playerHealth;
      this.addLogMessage("monster", "attacks", playerDamage);
    },
    playerAttack() {
      this.counter++;
      const monsterDamage = getRandom(5, 12);
      this.monsterHealth -= monsterDamage;
      this.monsterHealth = this.monsterHealth < 0 ? 0 : this.monsterHealth;
      this.addLogMessage("player", "attacks", monsterDamage);
      this.monsterAttack();
    },
    playerSpecialAttack() {
      this.counter = 1;
      const monsterDamage = getRandom(10, 25);
      this.monsterHealth -= monsterDamage;
      this.monsterHealth = this.monsterHealth < 0 ? 0 : this.monsterHealth;
      this.addLogMessage("player", "attacks", monsterDamage);
      this.monsterAttack();
    },
    healPlayer() {
      this.counter++;
      const healValue = getRandom(8, 20);
      this.playerHealth += healValue;
      this.playerHealth = this.playerHealth > 100 ? 100 : this.playerHealth;
      this.addLogMessage("player", "heals", healValue);
      this.monsterAttack();
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
