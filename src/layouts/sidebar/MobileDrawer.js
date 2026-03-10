import { Dialog } from "@headlessui/react";
import { Nav } from "./Nav";

export function MobileDrawer({ isOpen, onClose, nav }) {
    return (
        <Dialog
            as="div"
            open={isOpen}
            onClose={onClose}
            className="fixed z-50 inset-0 overflow-y-auto lg:hidden"
        >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
            <div className="relative bg-white w-[21.25rem] max-w-[calc(100%-3rem)] p-6 dark:bg-dark-grey-2 overflow-scroll h-full">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 focus:outline-none"
                >
                    <span className="sr-only">Close navigation</span>
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible">
                        <path
                            d="M0 0L10 10M10 0L0 10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
                <Nav nav={nav} />
            </div>
        </Dialog>
    );
}
