interface ISponsor {
  _id?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  nationality: string;
  offer: "Grant" | "Micro Credit";
  amount: number;
  location?: string;
  sponsor_count: number;
}

export default ISponsor;
