import { Albert_Sans } from '@next/font/google';
import { GetStaticProps } from 'next';
import { Answer, Question } from '/types/question';
import path from 'path';
import { promises as fs } from 'fs';
import { FormEvent } from 'react';

const albert = Albert_Sans({ weight: ['400', '700'], preload: false });

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

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log(data);
};

const Home = ({ questions }: { questions: Question[] }) => {
  return (
    <div className={`w-screen p-5 md:grid md:grid-cols-[1fr_500px_1fr] overflow-x-hidden ${albert.className}`}>
      <div className="flex items-center flex-col gap-5 md:col-start-2">
        {questions.map((question: Question, index: number) => (
          <div key={index} className="w-full flex flex-col gap-5 px-2 py-4 bg-green-200 rounded-lg">
            <h1 className="font-bold">{question.question}</h1>
            <form onSubmit={handleSubmit} id={question.question} className="flex items-start flex-col gap-3">
              {question.answers.map((answer: Answer, idx: number) => (
                <div key={index + idx} className="w-full flex items-center justify-center gap-2 text-sm">
                  <input type="checkbox" name={question.question} id={(index * 10 + idx).toString()} className="hidden peer"></input>
                  <label htmlFor={(index * 10 + idx).toString()} className="w-full p-2 border-[2px] border-transparent peer-checked:border-blue-500">
                    {answer.text}
                  </label>
                </div>
              ))}
              <button type="submit" className="px-2 font-bold">
                Sprawdź odpowiedź
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
