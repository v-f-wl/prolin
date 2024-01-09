import UserModel from "@/models/_userData";
import connectDB  from "../../../utils/connectMongoDB";
import mongoose, { Types } from 'mongoose';

export async function POST(req: Request) {
  await connectDB();
  try {
    const body = await req.json();
    const user = await UserModel.findById(body.userId)
    const todoId = new Types.ObjectId(body.todoId);
    user._doc.todo_collection = user._doc.todo_collection.filter((todo: any) => !todo._id.equals(todoId));
    user.markModified('todo_collection')
    await user.save();
    return Response.json({
      data: user._doc.todo_collection
    });
  } catch (error) {
    throw new Error(`Something went wrong with ${error}`);
  }
}
