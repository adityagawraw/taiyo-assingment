import React from "react";
import { useAppSelector } from "../../../features/store";
import { Contact } from "../../../features/contact-slice";

const ContactList = () => {
  const { arr } = useAppSelector((state) => state.contact);

  return (
    <div className="border-2 border-gray-600 rounded px-2 py-4  max-w-[1000px]">
      <div className="grid grid-cols-[1fr_2fr_2fr_1.5fr_2.5fr] bg-gray-300 py-3 rounded">
        <p className="text-center text-lg font-semibold text-gray-800">
          Sl.No.
        </p>
        <p className="text-center text-lg font-semibold text-gray-800">
          First Name
        </p>
        <p className="text-center text-lg font-semibold text-gray-800">
          Last Name
        </p>
        <p className=" text-center text-lg font-semibold text-gray-800">
          Status
        </p>
        <p className=" text-center text-lg font-semibold text-gray-800">
          Action
        </p>
      </div>
      {arr.length > 0 ? (
        arr?.map((element, index) => (
          <ContactRow contact={element} index={index} key={element.id} />
        ))
      ) : (
        <div>
          <p>No Contact found</p>
          <p>Please add contact from create contact button</p>
        </div>
      )}
    </div>
  );
};

export default ContactList;

interface Props {
  contact: Contact;
  index: number;
}
const ContactRow = ({ contact, index }: Props) => {
  return (
    <div
      className={`${
        index % 2 == 0 ? `bg-gray-100` : `bg-white`
      } my-1 grid grid-cols-[1fr_2fr_2fr_1.5fr_2.5fr]  py-1 rounded`}
    >
      <p className="text-center">{index + 1} </p>
      <p className="text-center">{contact.firstName}</p>
      <p className="text-center"> {contact.lastName}</p>
      <div className="text-center">{contact.status ? <p >Active</p> : <p>Inactive</p>}</div>
      <div className="flex justify-center gap-6 ">
        <button className="bg-yellow-400 px-3 rounded">Edit</button>
        <button className="bg-gray-300 text-gray-700 px-3 rounded">View</button>
        <button className="bg-red-500 text-white px-3 rounded">Delete</button>
      </div>
    </div>
  );
};
