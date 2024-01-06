
import { NextResponse } from "next/server"
import connectDB from "@/utils/connectMongoDB";
import UserModal from "@/models/_userData";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export async function POST(req: Request){
  await connectDB();
  try{
    const body = await req.json()

    const user = await UserModal.findOne({ email_address: body.userEmail})

    if(!user){
      return NextResponse.json({
        body: body.userEmail,
        message: 'Not found',
        status: 404
      })
    }

    const isValidPassword = await bcrypt.compare(body.password, user._doc.passwordHash)
    if(!isValidPassword){
      return NextResponse.json({
        message: 'Wrong data',
        status: 409
      })
    }

    const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET;

    if (!jwtSecret) {
      throw new Error('JWT secret is not defined');
    }
    const token = jwt.sign(
      {_id: user._id}, 
      jwtSecret,
      {expiresIn: '2d'}
    )
    const {passwordHash, ...userData} = user._doc
    return Response.json({
      ...userData,
      token
    })
  } catch(error){
    console.log('[COMPANION_POST]', error)
    return new NextResponse(`${error} Ошибка 3`, { status: 500 })
  }
}