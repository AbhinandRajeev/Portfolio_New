import React, { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon, AlertCircleIcon, XIcon } from 'lucide-react';

export default function ContactMailToast({ toastState, showToast }) {
  useEffect(() => {
    if (toastState.value) {
      const timer = setTimeout(() => {
        showToast((prev) => ({ ...prev, value: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toastState.value, showToast]);

  if (!toastState.value) return null;

  const bgColors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    failure: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  };

  const Icon = {
    success: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
    failure: <XCircleIcon className="h-5 w-5 text-red-500" />,
    warning: <AlertCircleIcon className="h-5 w-5 text-yellow-500" />,
  }[toastState.type] || <CheckCircleIcon className="h-5 w-5 text-green-500" />;

  return (
    <Transition
      show={toastState.value}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed bottom-4 right-4 z-[9999999] flex w-full max-w-sm overflow-hidden rounded-lg border bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className={`w-full p-4 ${bgColors[toastState.type] || bgColors.success}`}>
          <div className="flex items-start">
            <div className="flex-shrink-0">{Icon}</div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium">{toastState.message}</p>
            </div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className="inline-flex rounded-md bg-transparent text-gray-500 hover:text-gray-900 focus:outline-none"
                onClick={() => showToast({ ...toastState, value: false })}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
