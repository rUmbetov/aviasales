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
            {/* <div className="ticket">
              <div className="ticket__header">
                <h3 className="title">13 400 Р </h3>
                <img src={logoCompany} alt="logo company" />
              </div>
              <div className="ticket__main">
                <div className="ticket__main-top">
                  <div className="departure">
                    <div className="departure__title">MOW – HKT</div>
                    <div className="departure__info">10:45 – 08:00</div>
                  </div>
                  <div className="departure">
                    <div className="departure__title">В пути</div>
                    <div className="departure__info">21ч 15м</div>
                  </div>
                  <div className="departure">
                    <div className="departure__title">2 пересадки</div>
                    <div className="departure__info">HKG, JNB</div>
                  </div>
                </div>
                <div className="ticket__main-bottom">
                  <div className="arrival">
                    <div className="arrival__title">MOW – HKT</div>
                    <div className="arrival__info">11:20 – 00:50</div>
                  </div>
                  <div className="arrival">
                    <div className="arrival__title">В пути</div>
                    <div className="arrival__info">13ч 30м</div>
                  </div>
                  <div className="arrival">
                    <div className="arrival__title">1 пересадка</div>
                    <div className="arrival__info">HKG</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
