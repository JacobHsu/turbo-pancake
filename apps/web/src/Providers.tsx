import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
const Providers: React.FC<
  React.PropsWithChildren<{ store: Store; children: React.ReactNode }>
> = ({ children, store }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Providers;
