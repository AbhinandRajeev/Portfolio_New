import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MailIcon, XIcon } from "lucide-react";

import ContactForm from "./ContactForm";
import ContactMailToast from "./ContactMailToast";

import emailjs from "@emailjs/browser";

export default function ContactFormModal({ showModal, setShowModal }) {
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [toastState, setToastState] = useState({
    type: null,
    value: false,
    message: "",
  });

  const handleSubmit = async (values) => {
    setIsSendingMail(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setToastState({
        type: "success",
        value: true,
        message: "Successfully sent email!",
      });
      setShowModal(false);
    } catch (error) {
      console.error("Failed to send email:", error);
      setToastState({
        type: "failure",
        value: true,
        message: "Oops! Unable to send email",
      });
    }
    setIsSendingMail(false);
  };
  return (
    <>
      <Transition show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="z-[999999] relative"
          onClose={() => setShowModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <Dialog.Panel className="relative w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-10 md:p-12">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="flex items-center gap-3 text-2xl font-bold text-teal-600 sm:text-3xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                      <MailIcon className="h-6 w-6 text-teal-600" />
                    </div>
                    <span>Send Message</span>
                  </Dialog.Title>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 p-2 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900"
                    onClick={() => setShowModal(false)}
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
                <ContactForm
                  isSubmitting={isSendingMail}
                  handleSubmit={handleSubmit}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <ContactMailToast toastState={toastState} showToast={setToastState} />
    </>
  );
}
