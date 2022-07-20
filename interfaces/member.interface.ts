export interface Member {
  userId?: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  country: string;
  fellowship: string;
  status?: boolean;
  subscriberId?: string;
  _id?: string;
}
