/* eslint-disable func-style */
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("doggy", "assets/doggy.png");
}

function create() {
  this.add.image(400, 300, "doggy");
}

function update() {}
