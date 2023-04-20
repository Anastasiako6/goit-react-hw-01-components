import { GlobalStyle } from "./GlobalStyle";
import { Profile } from "./profile/Profile";
import user from './profile/user.json'
import { Layout } from "./Layout/Layout";
// import { Statistics } from "./Statistics/Statistics";
// import data from './Statistics/data.json'

export const App = () => {
  return (
    <Layout>
      <Profile items={user} />
      <GlobalStyle />
      {/* <Statistics title="Upload stats" stats={data} /> */}
    </Layout>
  );
};
