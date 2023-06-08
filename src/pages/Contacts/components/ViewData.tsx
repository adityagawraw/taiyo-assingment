import React,{Dispatch,SetStateAction} from 'react'
import { OpenModal } from '../Contacts';
import { Contact } from '../../../features/contact-slice';
import classes from "../Contact.module.css";

interface Props {
    openModal: OpenModal;
    setOpenModal: Dispatch<SetStateAction<OpenModal>>;
    viewData: Contact;
    setViewData: Dispatch<SetStateAction<Contact>>;
  }

const ViewData = ({openModal,setOpenModal,viewData,setViewData}:Props) => {

    if(!openModal.view) return null;
    return (
      <div className={` ${classes.modal}`}>
        <div className=" bg-white shadow border-2 border-gray-500 rounded-lg max-w-[450px] w-full px-4 py-2">
          <div className="flex justify-end py-2">
            <button
              onClick={() => {
                setOpenModal((prev) => {
                  return { ...prev, view: false };
                });
              }}
              className="w-fit "
            >
              <img src="/images/close.png" alt="" className="w-4 h-4" />
            </button>
          </div>
        
          <div className="text-lg font-semibold text-gray-800 ">
            <span>First Name : </span>
            <span>{viewData.firstName}</span>
          </div>
          <div className="text-lg font-semibold text-gray-800 ">
            <span>Last Name : </span>
            <span>{viewData.lastName}</span>
          </div>
          <div className="text-lg font-semibold text-gray-800 ">
            <span>Status : </span>
            <span>
              {viewData.status ? <span>Active</span> : <span>Inactive</span>}
            </span>
          </div>
          
        </div>
      </div>
  )
}

export default ViewData