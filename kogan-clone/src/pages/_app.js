// src/pages/_app.js
import '../styles/globals.css'; // Ensure you have global styles imported

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
