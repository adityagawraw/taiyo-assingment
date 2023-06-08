import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../features/store";
import { Contact, addContact } from "../../features/contact-slice";
import CreateModal from "./components/CreateModal";
import EditModal from "./components/EditModal";
import ContactList from "./components/ContactList";
import DeleteModal from "./components/DeleteModal";
import ViewData from "./components/ViewData";

export interface OpenModal {
  create: boolean;
  edit: boolean;
  delete: boolean;
  view: boolean;
}

const Contacts = () => {
  const contactList = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();

  const [openModal, setOpenModal] = useState<OpenModal>({
    create: false,
    edit: false,
    delete: false,
    view: false,
  });
  const [editData, setEditData] = useState<Contact>({
    id: 123,
    firstName: "",
    lastName: "",
    status: false,
  });
  const [deleteData, setDeleteData] = useState<Contact>({
    id: 123,
    firstName: "",
    lastName: "",
    status: false,
  });
  const [viewData, setViewData] = useState<Contact>({
    id: 123,
    firstName: "",
    lastName: "",
    status: false,
  });

  return (
    <div className="relative px-6">
      <div className="flex justify-end py-4 ">
        <button
          onClick={() => {
            setOpenModal((prev) => {
              return { ...prev, create: true };
            });
          }}
          className="bg-blue-500 text-white px-4 py-2 text-lg font-semibold rounded"
        >
          Create Contact +{" "}
        </button>
      </div>
      <ContactList />
      <CreateModal openModal={openModal} setOpenModal={setOpenModal} />
      <EditModal
        editData={editData}
        setEditData={setEditData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <DeleteModal
        deleteData={deleteData}
        setDeleteData={setDeleteData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ViewData
      
      viewData={viewData}
      setViewData={setViewData}
        openModal={openModal}
        setOpenModal={setOpenModal}/>
    </div>
  );
};

export default Contacts;
