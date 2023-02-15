import logo from './logo.svg';
import './App.css';
import Web3 from "web3";
import Web3Modal from "wally-web3modal";


 const providerOptions = {
   /* See Provider Options Section */
 };

const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
  wallyClientId: "f6d5f351-7a5b-4606-bd18-10b4a55c687a"  // required
});

const provider = await web3Modal.connect();

const web3 = new Web3(provider);


// const connectWallet = async () => {
//   if (window.ethereum) {
//     const provider = await web3Modal.connect();
//     const web3 = new Web3(provider);
//     await window.ethereum.send("eth_requestAccounts");
//     const accounts = await web3.eth.getAccounts();
//     const account = accounts[0];
//     document.querySelector(".connect").innerHTML = account;
//   } else {
//     // Show alert if Ethereum provider is not detected
//     alert("Please install Mask");
//   }
// };



function App() {
  return 
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Welcome to Wally</p>
    //     {/* <button type="button" className="btn btn-primary connect" onClick={connectWallet}>
    //       Connect Wallet
    //     </button> */}
    //   </header>
    // </div>
  
}
export default App;

