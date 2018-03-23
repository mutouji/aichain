import {Block} from './Block';
import {Transaction} from "./Transaction";

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        // hash 2fa19200cbbe25cb29a19f7741c3365eb482b3e47ff4046da8ed92dbbe45b4b1
        return new Block(0, "23/3/2018", "Genesis block", "0");
    }

    blockNumber() {
        return this.chain.length;
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    // addBlock(newBlock) {
    //     newBlock.previousHash = this.getLatestBlock().hash;
    //     newBlock.mineBlock(this.difficulty);
    //     this.chain.push(newBlock);
    // }

    createTransaction(transaction) {
        // here should be some check
        // push into transaction array
        this.pendingTransactions.push(transaction);
    }

    minePendingTransactions(miningRewardAddress) {
        // 用所有待交易来创建新的区块并且开挖..
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);
        // 将新挖的矿加入到链上
        this.chain.push(block);
        // 重置待处理交易列表并且发送奖励
        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    isChainValid() {
        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }

    getBalanceOfAddress(address){
        let balance = 0; // you start at zero!
        // 遍历每个区块以及每个区块内的交易
        for(const block of this.chain){
            for(const trans of block.transactions){
                // 如果地址是发起方 -> 减少余额
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }
                // 如果地址是接收方 -> 增加余额
                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }
}

export {BlockChain}
