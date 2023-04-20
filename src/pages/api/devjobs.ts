// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import projects from '../../../utils/api/json/ServerProjescts.json'
import error from 'next/error';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
  res.status(400).send("Invalid server response")
}