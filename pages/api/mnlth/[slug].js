import {requestMnlthAPI} from "../../../lib/mnlth";

export default async (req, res) => {
  const { slug } = req.query;
  const data = await requestMnlthAPI(slug);

  if (data)
    res.json(data);
  res.status(400).json({ error: 'Invalid slug'});
}
