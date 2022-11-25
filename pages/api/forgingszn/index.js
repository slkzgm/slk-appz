import {requestForgingSznAPI} from "../../../lib/forgingszn";

export default async function handler(req, res) {
  const data = await requestForgingSznAPI();

  if (data)
    return res.json(data);
  return res.status(400).json({ error: 'Invalid slug'});
}
