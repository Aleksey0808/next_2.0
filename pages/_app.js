import Head from "next/head";
import '@/styles/globals.scss'
import Layout from '@/components/Layout';
import Image from 'next/image';
import web from "../public/web.jpg"

const App = ({ Component, pageProps }) => (
   <Layout>
      <Head>
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main>
         <Component {...pageProps} />
      </main>
      {/* <Image 
      src={web}
      width={500}
      height={350}
      alt="preview"
      placeholder='blur' /> */}
   </Layout>
);

export default App;