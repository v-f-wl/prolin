import mongoose, { Types } from 'mongoose'
import RatingModel from './_ratingOfDays'
const UserSchema = new mongoose.Schema(
  {
    email_address: {
      type: String,
      required: true,
      unique: true,
      description: 'User email',
    },
    first_name: {
      type: String,
      default: '',
      required: true,
      description: 'User first name',
    },
    second_name: {
      type: String,
      default: '',
      required: true,
      description: 'User last name',
    },
    birthday_data: {
      type: String,
      default: '',
      description: 'User date of birth',
    },
    country_value: {
      type: String,
      default: '',
      description: 'User country',
    },
    city_value: {
      type: String,
      default: '',
      description: 'User city',
    },
    passwordHash: {
      type: String,
      required: true,
      description: 'User hashed password'
    },

    googleId: { 
      type: String 
    },
    githubId: { 
      type: String 
    },


    all_notifications: {
      type: Array,
      default: [],
      description: 'All user notifications',
    },
    new_notifications: {
      type: Array,
      default: [],
      description: 'Unread notifications of the user',
    },

    data_is_filled_in: {
      type: Boolean,
      default: false,
      description: 'Status of user profile completion: true - user has completed their profile information for proper application functionality, false - insufficient user information for proper application functionality',
    },

    todo_collection:{
      type: Array, 
      default: [],
      description: 'Active todo tasks of the user',
    },

    draft_collection:{
      type: String,
      default: '',
      description: 'Active tasks added to notes of the user',
    },
    rating: {
      type: String,
      default: '',
      description: 'id',
    },
  },
  {
    timestamps: true
  }
)
const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)

export default UserModel