import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  id:number;
  firstName: string;
  lastName: string;
  status: boolean;
}

export interface ContactList {
  arr: Contact[];
}

const initialState: ContactList = {
  arr: [
   
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    addContact: (state, action:PayloadAction<Contact>) => {
        state.arr = [ ...state.arr , action.payload];
    },
    updateContact: (state, action:PayloadAction<Contact>) => {
      const data:Contact = action.payload;
        state.arr = state.arr?.map((element, index)=>{
            if(element.id == data.id){
              return data;
            }
            return element
        })
    },
    deleteContact :(state, action:PayloadAction<Contact>) => {
      const data:Contact = action.payload;
      state.arr = state.arr?.filter((element, index)=> element.id!== data.id)
  },
  },
});

export const { addContact, updateContact, deleteContact } = contactSlice.actions;
export  default contactSlice.reducer;
