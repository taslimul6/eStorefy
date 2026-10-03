"use client";
import { useState } from "react";
import Header from "@/components/shared/Header";
import Modal from "@/components/shared/Modal";
import { downloadText } from "@/lib/download";
import { useDirectory } from "./DirectoryContext";
export default function DirectoryChrome() {
  const [open, setOpen] = useState(false);
  const { changeFilter } = useDirectory();
  function showSaved() {
    changeFilter("savedOnly", true);
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
  }
  function downloadSubmission(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    downloadText(
      "agency-listing-request.txt",
      "AGENCY LISTING REQUEST\n\n" +
        [...data.entries()].map(([key, value]) => `${key}: ${value}`).join("\n"),
    );
    setOpen(false);
  }
  return (
    <>
      <Header onSaved={showSaved} onSubmit={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)} title="Introduce your expertise.">
        <p>
          Create a listing request to download. This version does not submit or publish
          listings.
        </p>
        <form onSubmit={downloadSubmission}>
          <label className="formfield">
            Agency name
            <input required name="Agency name" maxLength={100} />
          </label>
          <label className="formfield">
            Website
            <input required type="url" name="Website" placeholder="https://" />
          </label>
          <label className="formfield">
            Business city
            <input required name="Business city" />
          </label>
          <label className="formfield">
            Email
            <input required type="email" name="Email" />
          </label>
          <button className="button dark">Download listing request</button>
        </form>
      </Modal>
    </>
  );
}
