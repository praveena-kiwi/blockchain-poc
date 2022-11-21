const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyContract = require('../smartContract/build/contracts/MyContract.json');
const { infuraUrl} = require('../config');
const { getNonceCount, updateNonceCount, createNonceCount } = require('../common/dao/nonceDao');

const address = '0xB99D41E2953D00C4BA7345943de39b0d2B5B8C91';
const privateKey = '97176bff3ac787ab5e200414d0476dd9c2c8c3871f81343ee8fef6607a5bd57d';

const getNonce = async(web3) => {
  let  nonce = await web3.eth.getTransactionCount(address)
  const nonceData = await getNonceCount({address})
  console.log('nonceData---', nonceData)
  if(!nonceData){
    await createNonceCount( {
      address,
      nonce
    })
  } else {
    nonce += 1
    const resObj = await updateNonceCount({address , nonce :nonce -1 }, {$set:{ nonce: nonce}})
    console.log('resObj---', resObj)
    if (resObj && resObj.modifiedCount === 0) {
      return await getNonce(web3);
    }
  }
  return nonce
}
const init1 = async () => {
  const web3 = new Web3(infuraUrl);
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );

  const tx = myContract.methods.setData(1);
  const gas = await tx.estimateGas({from: address});
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();
  const nonce = await getNonce(web3)

  const txData = {
    to: myContract.options.address,
    data,
    gas,
    gasPrice,
    nonce,
    chainId: networkId
  }
  console.log('txData---', txData)

  const signedTx = await web3.eth.accounts.signTransaction(txData,
    privateKey
  )
  console.log('signedTx---', signedTx)
  console.log(`Old data value: ${await myContract.methods.data().call()}`);
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`New data value: ${await myContract.methods.data().call()}`);
}

//Slightly easier (web3#sendTransaction())
const init2 = async () => {
  const web3 = new Web3(infuraUrl);
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );
  web3.eth.accounts.wallet.add(privateKey);

  const tx = myContract.methods.setData(2);
  const gas = await tx.estimateGas({from: address});
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(address);
  const txData = {
    from: address,
    to: myContract.options.address,
    data: data,
    gas,
    gasPrice,
    nonce,
    chain: 'goreli',
    hardfork: 'istanbul'
  };

  console.log(`Old data value: ${await myContract.methods.data().call()}`);
  const receipt = await web3.eth.sendTransaction(txData);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`New data value: ${await myContract.methods.data().call()}`);
}
init1();

//Easy way (Web3 + @truffle/hdwallet-provider)
const init3 = async () => {
  const provider = new Provider(privateKey, 'https://rinkeby.infura.io/v3/74aa9a15e2524f6980edb8a377301f3c'); 
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );

  console.log(await myContract.methods.data().call());
  console.log(`Old data value: ${await myContract.methods.data().call()}`);
  const receipt = await myContract.methods.setData(3).send({ from: address });
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`New data value: ${await myContract.methods.data().call()}`);
}

module.exports = {
  init1,
  init2,
  init3,
}