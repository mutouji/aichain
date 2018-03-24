// const hmacSha256 = require("crypto-js/hmac-sha256");
const sha256 = require("crypto-js/sha256");
class Block {
    constructor(timestamp, transaction, previousHash='') {
        this.timestamp = timestamp;
        this.transaction = transaction;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return sha256(this.timestamp + JSON.stringify(this.transaction) + this.previousHash + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block Mined: " + this.hash);
    }
}

export {Block};
