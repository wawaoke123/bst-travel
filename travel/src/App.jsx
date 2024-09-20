import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRouter from './routes/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};
