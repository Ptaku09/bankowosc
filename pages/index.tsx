import { Raleway } from '@next/font/google';
import { GetStaticProps } from 'next';
import Question from '/types/question';
import path from 'path';
import { promises as fs } from 'fs';

const raleway = Raleway({ weight: ['400', '700'], preload: false });

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
  return (
    <div className={`flex items-center justify-start flex-col ${raleway.className}`}>
      <div className="w-1/2">
        {questions.map((question: Question, index: number) => (
          <div key={index}>
            <h1>{question.question}</h1>
            <p>{question.answers[0].text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
