import {Block} from './Block';
import {BlockChain} from "./BlockChain";

function test_newBlock() {
    let block = new Block(1, 1, "haha");
    console.log(block.toString());
}

function test_newBlockChain() {
    let blockChain = new BlockChain();
    console.log(blockChain.chain.toString());
}

function test_blockchainValid() {
    let savjeeCoin = new BlockChain();
    console.log('Blockchain valid? ' + savjeeCoin.isChainValid());
    savjeeCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
    savjeeCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));

// 检查是否有效(将会返回true)
    console.log('Blockchain valid? ' + savjeeCoin.isChainValid());
// 现在尝试操作变更数据
    savjeeCoin.chain[1].data = { amount: 100 };
// 再次检查是否有效 (将会返回false)
    console.log("Blockchain valid? " + savjeeCoin.isChainValid());
}

test_blockchainValid();
