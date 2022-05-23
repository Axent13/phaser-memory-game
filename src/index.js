import Phaser from 'phaser';
import Board from './Board';

export default class Game extends Phaser.Game {

  constructor() {
    var config = {
      type: Phaser.AUTO,
      width: 750,
      height: 950,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      backgroundColor: '#4488aa',
    };
    super(config);
    this.scene.add('Game', Board, true);
  }
}

window.game = new Game();
