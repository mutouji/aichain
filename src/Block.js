const hmacSha256 = require("crypto-js/hmac-sha256");
class Block {
    constructor(timestamp, transaction, previousHash='') {
        this.timestamp = timestamp;
        this.transaction = transaction;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    toString() {
        return "timestamp=" + this.timestamp + ", transaction=" + JSON.stringify(this.transaction) + ",previousHash=" + this.previousHash + ",hash=" + this.hash;
    }

    calculateHash() {
        return hmacSha256("timestamp=" + this.timestamp, "transaction=" + JSON.stringify(this.transaction) + ",previousHash=" + this.previousHash + ",nonce="+this.nonce).toString();
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
