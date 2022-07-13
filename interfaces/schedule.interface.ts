interface Schedule {
  title: string;
  date: Date | string;
  type: string;
  location: string;
  city: string;
  state: string;
  country: string;
  fellowship?: string;
  _id?: string;
  userId: string;
  status?: boolean;
}

export default Schedule;
