import '../styles/index.css';
import 'antd/dist/antd.css';
import TopNav from '../components/TopNav';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}
