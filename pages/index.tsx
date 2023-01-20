import { Inter } from '@next/font/google';
import { NextPage } from 'next';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return <h1 className={`text-3xl font-bold underline ${inter.className}`}>Hello world!</h1>;
};

export default Home;
