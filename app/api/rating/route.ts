import connectDB from "../../../utils/connectMongoDB";


export async function POST(req: Request) {
  await connectDB()
    try {
        return Response.json({
          mess: 'good'
        })
    }
    catch (error) {
      throw new Error(`Something went wrong with ${error}`)
    }
} 