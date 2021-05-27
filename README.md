# e-voting-dApp-for-Lok-Sabha-Elections-based-on-Ethereum

Update:<br>
node setup.js<br>
Insert this contract address in js/index.js<br>

Old:<br>
Requirements:<br>
Node<br>
Ganache<br>

Installation:<br>
cd into the project folder<br>
//Start Ganache<br>

node<br>
Web3 = require('web3')<br>
web3 = new Web3("http://localhost:7545")<br>
web3.eth.getAccounts(console.log)<br>

bytecode = fs.readFileSync('Voting_sol_Voting.bin').toString()<br>
abi = JSON.parse(fs.readFileSync('Voting_sol_Voting.abi').toString())<br>

deployedContract = new web3.eth.Contract(abi)<br>

listOfCandidates = ['BJP', 'Congress', 'NOTA']<br>

  deployedContract.deploy({
  data: bytecode,
  arguments: [listOfCandidates.map(name => web3.utils.asciiToHex(name))]
}).send({
  from: '0x41d07EF62Cf018835baB662530C0EC7D18DDe20b',
  gas: 1500000,
  gasPrice: web3.utils.toWei('0.00003', 'ether')
}).then((newContractInstance) => {
  deployedContract.options.address = newContractInstance.options.address;
  console.log(newContractInstance.options.address)
});

//Insert the address of node in from:"Address"<br>
//Insert this contract address in js/index.js<br>

Test:<br>
deployedContract.methods.voteForCandidate(web3.utils.asciiToHex('BJP')).send({from:'0x8748a7f8585f658Aa1f65004BB965BB1999ce956'}).then((f) => console.log(f))<br>
//Insert the address of node in from:"Address"<br>
//Check results<br>

Project Report: https://bit.ly/ProjectReportsOfTanishqWadhwani<br>

<i>If this side project of mine helped you in your journey, it would mean a lot to me if you could tap on the star button above.
It would help me boost my personal brand.
Thanks! :) </i><br>

Wishing you all the very best!
