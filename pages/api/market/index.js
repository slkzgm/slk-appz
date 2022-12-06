import {requestCollectionsStats} from "../../../lib/market";

export default async function handler(req, res) {
  const data = await requestCollectionsStats();

  if (data)
    return res.json(data);
  return res.status(400).json({ error: 'Invalid slug'});
}
