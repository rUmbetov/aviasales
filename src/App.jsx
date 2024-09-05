import './App.scss';

import FilterAside from './components/FilterAside/FilterAside';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import TicketList from './components/TicketList/TicketList';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="main">
          <FilterAside />
          <div className="content">
            <TabButton />
            <TicketList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
