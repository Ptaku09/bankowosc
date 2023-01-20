import React from 'react';
import { Answer, Question } from '/types/question';
import { useForm } from 'react-hook-form';

type FormInput = {
  [index: number]: boolean;
};

const QuestionComponent = ({ question, index }: { question: Question; index: number }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitted },
  } = useForm();

  return (
    <div className="w-full flex flex-col gap-3 p-4 bg-stone-800 rounded-lg text-white shadow-xl">
      <h1 className="font-bold border-b-[1px] pb-2">{question.question}</h1>
      <form onSubmit={handleSubmit(() => {})} id={question.question} className="flex items-start flex-col gap-3">
        {question.answers.map((answer: Answer, idx: number) => (
          <div key={index + idx} className="w-full flex items-center justify-center gap-2 text-sm">
            <input {...register((index * 10 + idx).toString())} type="checkbox" id={(index * 10 + idx).toString()} className="hidden peer"></input>
            <label
              htmlFor={(index * 10 + idx).toString()}
              className={`w-full p-2 border-[2px] border-transparent rounded-lg peer-checked:text-stone-600 transition-all duration-200 ${
                isSubmitted
                  ? `${
                      answer.isCorrect
                        ? 'border-orange-500 peer-checked:border-green-500 peer-checked:bg-green-200'
                        : 'peer-checked:border-red-500 peer-checked:bg-red-200'
                    }`
                  : 'peer-checked:border-blue-500 peer-checked:text-white'
              }`}
            >
              {answer.text}
            </label>
          </div>
        ))}
        <div className="w-full flex items-center justify-between font-bold">
          <input type="submit" value="Sprawdź odpowiedź" />
          <input type="button" onClick={() => reset()} value="Reset" />
        </div>
      </form>
    </div>
  );
};

export default QuestionComponent;
