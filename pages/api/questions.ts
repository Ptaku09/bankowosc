import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import Question from '/types/question';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Question[]>) {
  const jsDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsDirectory + '/questions.json', 'utf8');
  const questions = JSON.parse(fileContents);

  res.status(200).json(questions);
}
