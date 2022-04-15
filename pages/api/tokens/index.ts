import { NextApiRequest, NextApiResponse } from 'next'
import { tokens } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(tokens)) {
      throw new Error('Cannot find token data')
    }

    res.status(200).json(tokens)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
