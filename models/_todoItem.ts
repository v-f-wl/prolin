import mongoose, { Types } from 'mongoose'

const TodoSchema = new mongoose.Schema(
  {
    todo_text: {
      type: String,
      required: true,
      description: 'Text of the Todo task',
    },
    todo_status: {
      type: String,
      default: '',
      description: 'Task status',
    },

    todo_contacts: {
      phone_number: Array,
      email: Array,
      adress: Array
    },

    is_active_todo: {
      type: Boolean,
      default: false,
      description: 'Is the task active: true - task is active, false - task is in draft'
    }
  },
  {
    timestamps: true
  }
)
const TodoModel = mongoose.models.Todo || mongoose.model('User', TodoSchema)

export default TodoModel