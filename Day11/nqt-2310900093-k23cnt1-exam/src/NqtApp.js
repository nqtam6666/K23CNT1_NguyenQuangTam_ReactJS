import './App.css';
import NqtAccountList from './components/NqtAccountList';
import { useState, useEffect } from 'react';

const Nqt_Accounts = [
  { nqt_id: "SV001", nqt_name: "Nguyễn Quang Tâm", nqt_email: "nguyenquangtam179@gmail.com", nqt_amount: 5000000 },
  { nqt_id: "SV002", nqt_name: "Nguyễn Quang B", nqt_email: "b@gmail.com", nqt_amount: 666666 },
  { nqt_id: "SV003", nqt_name: "Nguyễn Quang C", nqt_email: "c@gmail.com", nqt_amount: 666666 }
];

function NqtApp() {
  const [nqtAccounts, setNqtAccounts] = useState(() => {
    const nqtSavedAccounts = localStorage.getItem('nqtAccounts');
    return nqtSavedAccounts ? JSON.parse(nqtSavedAccounts) : Nqt_Accounts;
  });

  useEffect(() => {
    localStorage.setItem('nqtAccounts', JSON.stringify(nqtAccounts));
  }, [nqtAccounts]);

  const nqtHandleAddNewAccount = (nqtNewAccount) => {
    setNqtAccounts([...nqtAccounts, nqtNewAccount]);
  };

  return (
    <div className="container">
      <NqtAccountList 
        nqtAccountList={nqtAccounts} 
        nqtOnAddNewAccount={nqtHandleAddNewAccount} 
      />
    </div>
  );
}

export default NqtApp;