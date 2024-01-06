import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from "../../utils/connectMongoDB";
import UserModel from '../../models/_userData'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

interface RequestBody {
  userId: string;
  productId: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB()
  if(req.method === 'GET'){
    try {
      return res.status(200).json({
        message: 'success'
      });
    }catch (error) {
      res.status(500).json({ message: "error" })
    }
  }else{
    return res.status(500).json({ message: "" })
  }
} 
