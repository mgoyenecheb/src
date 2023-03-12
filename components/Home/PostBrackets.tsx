import React from 'react';
import { Table, Space } from 'antd';
import { Tabs } from 'antd';
import  { useState } from 'react';
const { TabPane } = Tabs;
interface Props {
  userid: string;
}

interface Bet {
  key: number;
  team1: string;
  team2: string;
  bet: number;
  result: string;
}

const mockData: Bet[] = [
  {
    key: 1,
    team1: 'Team A',
    team2: 'Team B',
    bet: 100,
    result: 'Win',
  },
  {
    key: 2,
    team1: 'Team C',
    team2: 'Team D',
    bet: 50,
    result: 'Loss',
  },
  {
    key: 3,
    team1: 'Team E',
    team2: 'Team F',
    bet: 200,
    result: 'Win',
  },
];

const PostBrackets: React.FC<Props> = ({ userid }) => {
    const [currentTab, setCurrentTab] = useState('1');

    const handleTabChange = (key: string) => {
      setCurrentTab(key);
    };

  const columns = [
    {
      title: 'Team 1',
      dataIndex: 'team1',
      key: 'team1',
    },
    {
      title: 'Team 2',
      dataIndex: 'team2',
      key: 'team2',
    },
    {
      title: 'Bet',
      dataIndex: 'bet',
      key: 'bet',
    },
    {
      title: 'Result',
      dataIndex: 'result',
      key: 'result',
    },

  ];

  return (
    
    <div className="bg-blackGr pb-5">
    <div className="container">
      <h3 className="text-center pt-5 pb-2"><span className="text-warning">[</span> Post Brackets <span className="text-warning">]</span> <span className="text-white-50 ms-3">[ Active Leaderboard ]</span></h3>
      <div className="bg-black p-3 rounded-3">
        <div className="table-responsive">
          <table className="table table-dark table-striped text-white">
            <thead>
              <tr className="fw-bolder fs-4">
                <td>Game</td>
                <td>User</td>
                <td>Time</td>
                <td>Amount</td>
                <td>Multiplier</td>
                <td>Result</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <input className="form-check-input" type="checkbox" value="" id="CheckDefault1" />
                    Game Type</td>
                <td>User Name</td>
                <td>00:00 PM</td>
                <td>$1000</td>
                <td>2.00x</td>
                <td>$2000</td>
              </tr>
              <tr>
                <td>
                <input className="form-check-input" type="checkbox" value="" id="CheckDefault2" />
                Game Type</td>
                <td>User Name</td>
                <td>00:00 PM</td>
                <td>$1000</td>
                <td>2.00x</td>
                <td>$2000</td>
              </tr>
              <tr>
                <td>
                    <input className="form-check-input" type="checkbox" value="" id="CheckDefault1" />
                    Game Type</td>
                <td>User Name</td>
                <td>00:00 PM</td>
                <td>$1000</td>
                <td>2.00x</td>
                <td>$2000</td>
              </tr>
              <tr>
                <td>
                <input className="form-check-input" type="checkbox" value="" id="CheckDefault2" />
                Game Type</td>
                <td>User Name</td>
                <td>00:00 PM</td>
                <td>$1000</td>
                <td>2.00x</td>
                <td>$2000</td>
              </tr>
              <tr>
                <td>
                    <input className="form-check-input" type="checkbox" value="" id="CheckDefault1" />
                    Game Type</td>
                <td>User Name</td>
                <td>00:00 PM</td>
                <td>$1000</td>
                <td>2.00x</td>
                <td>$2000</td>
              </tr>
              <tr>
                <td>
                <input className="form-check-input" type="checkbox" value="" id="CheckDefault2" />
                Game Type</td>
                <td>User Name</td>
                <td>00:00 PM</td>
                <td>$1000</td>
                <td>2.00x</td>
                <td>$2000</td>
              </tr>
              <tr>
                <td>
                <input className="form-check-input" type="checkbox" value="" id="CheckDefault2" />
                Game Type</td>
                <td>User Name</td>
                <td>00:00 PM</td>
                <td>$1000</td>
                <td>2.00x</td>
                <td>$2000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PostBrackets;
