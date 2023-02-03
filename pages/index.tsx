import { Albert_Sans } from '@next/font/google';
import { GetStaticProps } from 'next';
import { Question } from '/types/question';
import path from 'path';
import { promises as fs } from 'fs';
import QuestionComponent from '/components/QuestionComponent';
import React, { useContext, useEffect, useState } from 'react';
import WidgetBar from '/components/WidgetBar';
import { HideCorrectlyAnsweredContext } from '/providers/HideCorrectlyAnsweredProvider';
import lodash from 'lodash';

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

const Home = ({ questions }: { questions: Question[] }) => {
  const [correctlyAnswered, setCorrectlyAnswered] = useState<number[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const { isHidden } = useContext(HideCorrectlyAnsweredContext);

  useEffect(() => {
    setShuffledQuestions(lodash.shuffle(questions));
  }, [questions]);

  useEffect(() => {
    const correctlyAnswered = localStorage.getItem('computer-networks-caq');

    if (correctlyAnswered) {
      setCorrectlyAnswered(JSON.parse(correctlyAnswered));
    }
  }, []);

  return (
    <div className={`w-screen p-5 md:grid md:grid-cols-[1fr_500px_1fr] overflow-x-hidden bg-black ${albert.className}`}>
      <div className="flex items-center flex-col gap-5 md:col-start-2">
        {shuffledQuestions.map((question: Question) => {
          return correctlyAnswered.includes(question.id) && isHidden ? null : (
            <QuestionComponent key={question.id} question={question} index={question.id} />
          );
        })}
      </div>
      <WidgetBar />
    </div>
  );
};

export default Home;
