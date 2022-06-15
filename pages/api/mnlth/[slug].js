import {requestMnlthAPI} from "../../../lib/mnlth";

export default async function handler(req, res) {
  const { slug } = req.query;
  const data = await requestMnlthAPI(slug);

  if (data)
    return res.json(data);
  return res.status(400).json({ error: 'Invalid slug'});
}
