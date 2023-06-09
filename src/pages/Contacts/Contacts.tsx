import React, { useState } from "react";

import { Contact } from "../../features/contact-slice";
import CreateModal from "./components/CreateModal";
import EditModal from "./components/EditModal";
import ContactList from "./components/ContactList";
import DeleteModal from "./components/DeleteModal";
import ViewData from "./components/ViewData";
import Sidebar from "../components/Sidebar/Sidebar";
import classes from "./Contact.module.css";
import Menu from "../components/Sidebar/Menu";

export interface OpenModal {
  create: boolean;
  edit: boolean;
  delete: boolean;
  view: boolean;
}

const Contacts = () => {
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
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className={`${classes.contact} w-[100vw]`}>
      <Sidebar />
      <div className="relative py-3 px-6">
        <div className="flex justify-between border-b pb-2">
          <p className="text-3xl font-bold text-gray-700  ">Contacts</p>
          <button onClick={() => setOpenMenu((prev) => !prev)} className={`${classes.menuButton}`}>
            <img src="/images/bars.png" alt="" className="max-w-8 max-h-8" />
          </button>
        </div>
        {openMenu && <Menu />}

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
        <ContactList
          setOpenModal={setOpenModal}
          setEditData={setEditData}
          setDeleteData={setDeleteData}
          setViewData={setViewData}
        />
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
          setOpenModal={setOpenModal}
        />
      </div>
    </div>
  );
};

export default Contacts;
