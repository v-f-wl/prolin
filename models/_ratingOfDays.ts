import { Schema, model, Document } from 'mongoose';

interface Day {
  completed: number;
  efficiency: number;
  learning: number;
  comment: string;
  dayOfWeek: string; // День недели (например, "Mon", "Tue" и т.д.)
}

interface Week {
  days: Array<Document & Day>;
  weekNumber: number;
}

interface Month {
  weeks: Array<Document & Week>;
  totalCompleted: number;
  totalEfficiency: number;
  totalLearning: number;
  monthNumber: number;
}

interface Year {
  months: Array<Document & Month>;
  totalValue: number;
  yearNumber: number;
}

interface RatingDocument extends Document, Year {}

const DaySchema = new Schema<Document & Day>(
  {
    completed: {
      type: Number,
      default: 0,
    },
    efficiency: {
      type: Number,
      default: 0,
    },
    learning: {
      type: Number,
      default: 0,
    },
    comment: {
      type: String,
      default: '',
    },
    dayOfWeek: {
      type: String,
      enum: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], // Добавим ограничение на дни недели
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WeekSchema = new Schema<Document & Week>(
  {
    days: [DaySchema],
    weekNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MonthSchema = new Schema<Document & Month>(
  {
    weeks: [WeekSchema],
    totalCompleted: {
      type: Number,
      default: 0,
    },
    totalEfficiency: {
      type: Number,
      default: 0,
    },
    totalLearning: {
      type: Number,
      default: 0,
    },
    monthNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const YearSchema = new Schema<Document & Year>(
  {
    months: [MonthSchema],
    totalValue: {
      type: Number,
      default: 0
    },
    yearNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RatingModel = model<RatingDocument>('Rating', YearSchema);

export default RatingModel;
