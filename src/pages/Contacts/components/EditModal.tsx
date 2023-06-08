import React, { Dispatch, SetStateAction } from "react";
import { OpenModal } from "../Contacts";
import { Contact } from "../../../features/contact-slice";

interface Props {
  openModal: OpenModal;
  setOpenModal: Dispatch<SetStateAction<OpenModal>>;
  editData:Contact;
  setEditData:Dispatch<SetStateAction<Contact>>;
}

const EditModal = ({ openModal, setOpenModal,editData,setEditData }: Props) => {
  return <div>EditModal</div>;
};

export default EditModal;
