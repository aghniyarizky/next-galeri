import '../styles/globals.css';

//import bootstrap
  import 'bootstrap/dist/css/bootstrap.min.css';

//import custom css
  import '../styles/custom.css';

//import grid layout css
  import '../styles/grid.css';

//import layout create
  import '../styles/create.css';

//import postContext search
import { SearchProvider } from '../components/contexts/searchContext';



function MyApp({ Component, pageProps }) {
  return (
      <SearchProvider>
          <Component {...pageProps} />
      </SearchProvider>
  );
}


export default MyApp