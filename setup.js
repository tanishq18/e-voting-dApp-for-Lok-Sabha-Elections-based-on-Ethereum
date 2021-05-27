//npm install -g ganache-cli web3 solc
//solcjs --bin --abi Voting.sol
//Start Ganache, click on Quickstart Ethereum

Web3 = require('web3');
web3 = new Web3("http://localhost:7545");
var accounts = [];

var fs = require('fs');
bytecode = fs.readFileSync('Voting_sol_Voting.bin').toString();
abi = JSON.parse(fs.readFileSync('Voting_sol_Voting.abi').toString());

deployedContract = new web3.eth.Contract(abi);

listOfCandidates = ['BJP', 'NCP', 'NOTA'];

web3.eth.getAccounts().then((f) => {
    for (const property in f) {
        accounts.push(f[property]);
    };
    account = accounts[0];
    deployedContract.deploy({
        data: bytecode,
        arguments: [listOfCandidates.map(name => web3.utils.asciiToHex(name))]
        }).send({
        from: account,
        gas: 100000,
        gasPrice: web3.utils.toWei('0.00001', 'ether')
        }).then((newContractInstance) => {
        deployedContract.options.address = newContractInstance.options.address;
        console.log(newContractInstance.options.address);
    });
});
