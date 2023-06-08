import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { OpenModal } from "../Contacts";
import classes from "../Contact.module.css";
import { Contact, addContact } from "../../../features/contact-slice";
import { useAppDispatch } from "../../../features/store";

interface Props {
  openModal: OpenModal;
  setOpenModal: Dispatch<SetStateAction<OpenModal>>;
}
const CreateModal = ({ openModal, setOpenModal }: Props) => {
  const [contactData, setContactData] = useState<Contact>({
    id: new Date().getTime(),
    firstName: "",
    lastName: "",
    status: true,
  });
  const dispatch  = useAppDispatch();

const saveContact =()=>{
    if(contactData.firstName !=="" &&contactData.lastName !==""){
        dispatch (addContact(contactData));
        setContactData({ id: new Date().getTime(),
            firstName: "",
            lastName: "",
            status: true,})
            setOpenModal(prev=>{
                return {...prev, create:false}
            })
        return;
    }
    alert("Please fill all the fields")
   
}

if(!openModal.create) return null;
  return (
    <div className={` ${classes.modal}`}>
      <div className=" bg-white shadow border-2 border-gray-500 rounded-lg max-w-[450px] w-full px-4 py-2">
        <div className="flex justify-end py-2">
          <button onClick={()=>{
            setOpenModal(prev=>{
                return {...prev, create: false}
            })
          }} className="w-fit ">
            <img src="/images/close.png" alt="" className="w-4 h-4"/>
          </button>
        </div>
        <div className={`${classes.inputField} justify-between my-2 w-full`}>
          <span className=" text-gray-700 text-lg font-semibold">
            First Name :{" "}
          </span>
          <input
            onChange={(e) => {
              setContactData((prev) => {
                return { ...prev, firstName: e.target.value };
              });
            }}
            type="text"
            className="px-2 text-gray-700 text-lg font-semibold outline-none border border-gray-400 rounded"
          />
        </div>
        <div className={`${classes.inputField} justify-between my-2`}>
          <span className=" text-gray-700 text-lg font-semibold">
            Last Name :{" "}
          </span>
          <input
            onChange={(e) => {
              setContactData((prev) => {
                return { ...prev, lastName: e.target.value };
              });
            }}
            type="text"
            
            className="px-2 text-gray-700 text-lg font-semibold outline-none border border-gray-400 rounded"
          />
        </div>
        <div className={`${classes.inputField}  my-2 gap-12`}>
          <span className=" text-gray-700 text-lg font-semibold">Status:</span>
          <div className="flex flex-col">
            <div>
              <input
                onChange={() => {
                  setContactData((prev) => {
                    return { ...prev, status: true };
                  });
                }}
                type="radio"
                name="status"
                className="mr-2 text-gray-700 text-lg font-semibold outline-none border border-gray-400 rounded"
              />
              <span className="text-gray-700 font-semibold">Active</span>
            </div>
            <div>
              <input
                onChange={() => {
                  setContactData((prev) => {
                    return { ...prev, status: false };
                  });
                }}
                type="radio"
                name="status"
                className=" mr-2 text-gray-700 text-lg font-semibold outline-none border border-gray-400 rounded"
              />
              <span className="text-gray-700 font-semibold">Inactive</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button 
          onClick={()=>saveContact()}
          className="text-lg font-semibold text-white px-2 py-1 bg-blue-600 rounded-lg hover:bg-blue-700">
            {" "}
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
