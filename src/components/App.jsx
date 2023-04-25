import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";

// import { Profile } from "./Profile/Profile";
// import user from './Profile/user.json';

import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json';

import { FriendList } from './FriendList/FriendList'
import friends from './FriendList/friends.json';

import { TransactionHistory } from './Transaction/TransactionHistory';
import transactions  from "./Transaction/transactions.json";

export const App = () => {
  return (
    <Layout>
      {/* <Profile items={user} />; */}
      <GlobalStyle />;
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Layout>
  );
};
