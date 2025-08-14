import { dbConnect } from "../../../../lib/dbConnect";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
  });

  const User = mongoose.models.User || mongoose.model("User", userSchema);

//   export async function POST(request : Request) {
//     try {
//       await dbConnect(); // Connect to DB only if not connected
//       const body = await request.json();
//       const newUser = await User.create(body);
//       return Response.json({ success: true, data: newUser });
//     } catch (error:any) {
//       return Response.json({ success: false, error: error.message }, { status: 500 });
//     }
//   }

  export async function GET() {
    try {
      await dbConnect(); // Connect to DB only if not connected
      const users = await User.find({});
      return Response.json({ success: true, data: users });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return Response.json({ success: false, error: message }, { status: 500 });
    }
  }