import { Inter } from '@next/font/google';
import { GetStaticProps } from 'next';
import Question from '/types/question';
import path from 'path';
import { promises as fs } from 'fs';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps: GetStaticProps = async () => {
  const jsDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsDirectory + '/questions.json', 'utf8');
  const questions = JSON.parse(fileContents);

  return {
    props: {
      questions,
    },
  };
};

const Home = ({ questions }: { questions: Question[] }) => {
  return <h1 className={`text-3xl font-bold underline ${inter.className}`}>Hello world!</h1>;
};

export default Home;
