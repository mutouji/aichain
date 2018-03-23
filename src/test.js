import {Block} from './Block';
import {BlockChain} from "./BlockChain";
import {Transaction} from "./Transaction";

// function test_newBlock() {
//     let block = new Block(1, 1, "haha");
//     console.log(block.toString());
// }
//
// function test_newBlockChain() {
//     let blockChain = new BlockChain();
//     console.log(blockChain.chain.toString());
// }
//
// function test_blockchainValid() {
//     let savjeeCoin = new BlockChain();
//     console.log('Blockchain valid? ' + savjeeCoin.isChainValid());
//     savjeeCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
//     savjeeCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));
//
// // 检查是否有效(将会返回true)
//     console.log('Blockchain valid? ' + savjeeCoin.isChainValid());
// // 现在尝试操作变更数据
//     savjeeCoin.chain[1].data = { amount: 100 };
// // 再次检查是否有效 (将会返回false)
//     console.log("Blockchain valid? " + savjeeCoin.isChainValid());
// }
let savjeeCoin = null;
function test_createTransaction() {
    savjeeCoin = new BlockChain();
    console.log('Creating some transactions...');
    savjeeCoin.createTransaction(new Transaction('address1', 'address2', 100));
    savjeeCoin.createTransaction(new Transaction('address2', 'address1', 50));
}

function test_mining() {
    console.log('Starting the miner...');
    savjeeCoin.minePendingTransactions('xaviers-address');
    console.log('Balance of Xaviers address is', savjeeCoin.getBalanceOfAddress('xaviers-address'));
}

test_createTransaction();
test_mining();
