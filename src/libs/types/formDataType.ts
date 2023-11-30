export type FormData = {
  buyFor?: string;
  age?: string;
  gender?: string;
  description?: string;
  occasion?: string;
  gift?: string;
  spendAmount?: string;
  country?: string;
};

export type initialStateType = {
  data: FormData;
  isLoading: boolean;
};


