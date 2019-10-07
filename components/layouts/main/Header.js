import Head from 'next/head';
import NavBar from './NavBar';

const Header = () => (
  <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    </Head>
    <style jsx global>{`
      body {
        font-family: 'Open Sans', sans-serif;
      }
      .card {
        margin-bottom: 30px;
      }
    `}</style>
    <NavBar />
  </>
);

export default Header;