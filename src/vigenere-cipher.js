const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct) {
    if(direct === undefined || direct === null) {
      this.direct = true;
    } else {
      this.direct = direct;
    }
  }

  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let key_index = 0;
    let result = "";

    for (var i = 0; i < message.length; i++) {
      let index_message = characters.indexOf(message[i]);
      if(index_message >= 0) {
        let index_key = characters.indexOf(key[key_index]);
        let index = ( ( index_message + index_key ) % characters.length );
        result += characters[index];

        if( (key_index + 1) == key.length) {
          key_index = 0;
        } else {
          key_index = key_index + 1;
        }

      } else {
        result += message[i];
      }

    }

    if(!this.direct) {
      result = result.split("").reverse().join("")
    }

    return result;
  }
  decrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let key_index = 0;
    let result = "";

    for (var i = 0; i < message.length; i++) {
      let index_message = characters.indexOf(message[i]);
      if(index_message >= 0) {
        let index_key = characters.indexOf(key[key_index]);
        let index = ( ( index_message + characters.length - index_key ) % characters.length );
        result += characters[index];

        if( (key_index + 1) == key.length) {
          key_index = 0;
        } else {
          key_index = key_index + 1;
        }

      } else {
        result += message[i];
      }

    }

    if(!this.direct) {
      result = result.split("").reverse().join("")
    }

    return result;
  }
}

module.exports = VigenereCipheringMachine;
