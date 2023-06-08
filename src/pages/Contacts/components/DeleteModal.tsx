import React, { Dispatch, SetStateAction } from "react";
import classes from "../Contact.module.css";
import { OpenModal } from "../Contacts";
import { Contact } from "../../../features/contact-slice";
import { useAppDispatch } from "../../../features/store";
import { deleteContact } from "../../../features/contact-slice";

interface Props {
  openModal: OpenModal;
  setOpenModal: Dispatch<SetStateAction<OpenModal>>;
  deleteData: Contact;
  setDeleteData: Dispatch<SetStateAction<Contact>>;
}

const DeleteModal = ({
  openModal,
  setOpenModal,
  deleteData,
  setDeleteData,
}: Props) => {
const dispatch = useAppDispatch();
    const handleDeleteContact =()=>{
        dispatch(deleteContact(deleteData));
        setDeleteData({
            id:123,
            firstName:"",
            lastName:"",
            status:false
        })
        setOpenModal(prev=>{
            return {...prev, delete:false}
        })
    }
    if(!openModal.delete) return null;
  return (
    <div className={` ${classes.modal}`}>
      <div className=" bg-white shadow border-2 border-gray-500 rounded-lg max-w-[450px] w-full px-4 py-2">
        <div className="flex justify-end py-2">
          <button
            onClick={() => {
              setOpenModal((prev) => {
                return { ...prev, delete: false };
              });
            }}
            className="w-fit "
          >
            <img src="/images/close.png" alt="" className="w-4 h-4" />
          </button>
        </div>
        <p className="text-center font-semibold text-gray-700 text-lg py-2">Are You sure you want to delete this Contact</p>
        <div className="text-lg font-semibold text-gray-800 ">
          <span>First Name : </span>
          <span>{deleteData.firstName}</span>
        </div>
        <div className="text-lg font-semibold text-gray-800 ">
          <span>Last Name : </span>
          <span>{deleteData.lastName}</span>
        </div>
        <div className="text-lg font-semibold text-gray-800 ">
          <span>Status : </span>
          <span>
            {deleteData.status ? <span>Active</span> : <span>Inactive</span>}
          </span>
        </div>
        <div className="flex justify-center gap-6 my-2">
          <button
          onClick={()=>handleDeleteContact()}
            className={`px-3 rounded border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600`}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setOpenModal((prev) => {
                return { ...prev, delete: false };
              });
            }}
            className={`px-3 rounded border-2 border-gray-600 text-gray-700  hover:bg-gray-200`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
