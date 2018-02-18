import { localWeb3, contractInstance } from '../src/web3Contract'

console.log(localWeb3);
class Services {
	getAccount(){
		return	localWeb3.eth.accounts;
	}
  getNetwork(){
    return  localWeb3.version.network;
  }
	getBalance (accounts) {
		return new Promise((resolve, reject) => {
			localWeb3.eth.getBalance(accounts,
        function(error, balance){
          if(!error) {
            console.log(balance)
            resolve(balance);
          } else {
          	reject(error);
            console.error(error);
          }
        })   
		})
	}
}







export default new Services()

