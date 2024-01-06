
import { NextResponse } from "next/server"
import connectDB from "@/utils/connectMongoDB";
import UserModel from "@/models/_userData";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import RatingModel from "@/models/_ratingOfDays";


export async function POST(req: Request){
  await connectDB();
  try{
    const body = await req.json()

    const salt = await bcrypt.genSalt(3)
    const hash = await bcrypt.hash(body.password, salt)

    const doc = await new UserModel({
      first_name: body.firstName,
      second_name: body.secondName,
      email_address: body.userEmail,
      passwordHash: hash
    })

    const ratingData = {
      yearNumber: new Date().getFullYear(),
      months: [
        {
          monthNumber: new Date().getMonth() + 1,
          weeks: [
            {
              weekNumber: Math.ceil(new Date().getDate() / 7),
              days: [
                {
                  сompleted: 0,
                  efficiency: 0,
                  learning: 0,
                  comment: '',
                },
              ],
            },
          ],
        },
      ],
    };
    const rating = await RatingModel.create(ratingData);
    doc.rating = rating._id;
    const user = await doc.save()
    const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET;

    if (!jwtSecret) {
      throw new Error('JWT secret is not defined');
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      jwtSecret,
      {
        expiresIn: '2d',
      }
    )
    const { passwordHash, ...userData } = user



    return NextResponse.json({ ...userData, token })
  } catch(error){
    console.log('[COMPANION_POST]', error)
    return new NextResponse(`${error} Ошибка 3`, { status: 500 })
  }
}