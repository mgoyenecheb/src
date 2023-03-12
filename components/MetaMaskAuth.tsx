import { genComponentStyleHook } from "antd/es/theme/internal";
import React, { useEffect, useState } from "react";

export default function MetaMaskAuth() {
    const [userAddress, setUserAddress] = useState("");
  var address=''
  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);


  console.log('MetaMaskAuth: ' + address)
  return userAddress ? (
    <div>
      Connected with  <span className="nav-link px-2 link-dark d-flex">{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
    </div>
  ) : (
    <button type="button" className="btn btn-blue d-flex align-items-center" onClick={() => connect(setUserAddress)} data-bs-toggle="modal" data-bs-target="#modalWallet"><span className="iconWallet me-2"> </span><span>Connect Wallet</span></button>
  );
}

async function connect(onConnected:any) {
    if (!window.ethereum) {
      alert("Get MetaMask!");
      return;
    }
  
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  
    onConnected(accounts[0]);
  }
  
  
  async function checkIfWalletIsConnected(onConnected:any) {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
  
      if (accounts.length > 0) {
        const account = accounts[0];
        onConnected(account);
        return;
      }
    }
  }





