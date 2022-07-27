import {requestMintvialAPI} from "../../../lib/mintvial";

export default async function handler(req, res) {
  const { slug } = req.query;
  const data = await requestMintvialAPI(slug);

  if (data)
    return res.json(data);
  return res.status(400).json({ error: 'Invalid slug'});
}
