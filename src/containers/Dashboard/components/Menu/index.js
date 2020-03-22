import React from "react";
import Sidebar from "../../../../common/Sidebar";

export default function Menu({ open, setOpen }) {
  return (
    <Sidebar anchor="right" open={open} onClose={() => setOpen(false)}>
      <h1>Menu</h1>
        <h3>List</h3>
        <h3>Emails</h3>
        <h3>Log out</h3>
    </Sidebar>
  );
}
