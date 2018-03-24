import {BlockChain} from "./BlockChain";

class AiChain {
    constructor() {
        this.blockchain = new BlockChain();
    }
    replaceChain = (newChain) => {
        if (newChain.isChainValid() && newChain.length > this.blockchain.length) {
            console.log('Received blockchain is valid. Replacing current blockchain with received blockchain');
            this.blockchain = newChain;
            broadcast(responseLatestMsg());
        } else {
            console.log('Received blockchain invalid');
        }
    }
}

export {AiChain};
