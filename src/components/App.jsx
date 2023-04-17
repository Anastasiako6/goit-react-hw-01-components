import { Profile } from "./profile/Profile";
import user from './data/user.json'

export const App = () => {
  return (
    <div>
      <Profile items={user} />
    </div>
  );
};
