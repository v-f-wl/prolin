import UserModel from "@/models/_userData";
import connectDB  from "../../../utils/connectMongoDB";
import mongoose from 'mongoose';

function formatTwoDigits(num: number): string {
  return num < 10 ? `0${num}` : num.toString();
}

function formatDateAndTime(date: Date) {
  const day: string = formatTwoDigits(date.getDate());
  const month: string = formatTwoDigits(date.getMonth() + 1); // Месяцы в JavaScript начинаются с 0
  const year: string = date.getFullYear().toString().slice(-2); // Получение двузначного года
  const hours: string = formatTwoDigits(date.getHours());
  const minutes: string = formatTwoDigits(date.getMinutes());

  return {
    date: `${day}.${month}.${year}`,
    time: `${hours}:${minutes}`
  }
}

export async function POST(req: Request) {
  await connectDB();
  try {
    const body = await req.json();
    const user = await UserModel.findById(body.userId)
    const date = new Date()
    const dateFormat = formatDateAndTime(date)
    const newObjectId = new mongoose.Types.ObjectId();
    const todoData = {...body}
    delete todoData.userId
    user._doc.todo_collection.push({...todoData, _id: newObjectId, createdAt: dateFormat, completed:false})
    await user.save()
    return Response.json({
      data: user._doc.todo_collection
    });
  } catch (error) {
    throw new Error(`Something went wrong with ${error}`);
  }
}
