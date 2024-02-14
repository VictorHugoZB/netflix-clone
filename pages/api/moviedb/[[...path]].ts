import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next/types';

type ResponseData = {
  message: string
}

const API_KEY = process.env.MOVIEDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'GET') {
    throw new Error('Somente método GET');
  }

  try {
    const query = { ...req.query };
    const path = (query.path as string[]).join('/');
    delete query.path;
    const params = { ...query };

    const { data } = await axios.get(`${BASE_URL}/${path}`, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
        ...params,
      },
    });
    return res.status(200).json({ ...data });
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({
      message: e.message,
    });
  }
}
