import connectDB from "../../utils/connectMongoDB";
import UserModel from '../../models/_userData'
import jwt, { JwtPayload } from 'jsonwebtoken';

interface MyJwtPayload extends JwtPayload {
  _id: string;
}

export async function POST(req: Request) {
  await connectDB()
    try {
      const body = await req.json()
      const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET;
      if (!jwtSecret) {
        throw new Error('JWT secret is not defined');
      }
      const decoded = jwt.verify(body.token, jwtSecret) as MyJwtPayload
      if(decoded._id === body.userId){
        console.log('scsd')
        const user = await UserModel.findOne({ _id: body.userId})
        const {passwordHash, ...newObj } = user._doc

        return Response.json({
          user: newObj,
          message: true
        })
      }else{
        return Response.json({ message: 'Не сходятся данные' })
      }
    }
    catch (error) {
      throw new Error(`Something went wrong with ${error}`)
    }
} 