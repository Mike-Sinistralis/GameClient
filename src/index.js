import Phaser from 'phaser';

let game;
let config;

function preload ()
{
}

function create ()
{
}

function update ()
{
}

config = {
  type: Phaser.AUTO,
  scene: {
      preload,
      create,
      update,
  }
};

game = new Phaser.Game(config);
console.log(game);
debugger;
