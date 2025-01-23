import mongoose, { Schema } from "mongoose";


export interface ITodo extends Document {
    title: string;
    description?: string;
    completed: Boolean;
    createdAt: Date;
    updatedAt: Date;
}

const TodoSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        completed: { type: Boolean, default: false }
    },
    { timestamps: true }
)

export default mongoose.model<ITodo>('Todo', TodoSchema)