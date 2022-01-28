import { Transition } from "@headlessui/react";
import NotificationMsg from "./NotificationMsg";

const NotificationStack = ({ msgs }: { msgs?: string[] }) => {
  return (
    <div className="fixed z-50 w-full flex flex-col gap-4 justify-center items-center p-4">
      {msgs != undefined && msgs.length > 0
        ? msgs.map((msg, i) => (
            <Transition
              appear={true}
              show={true}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              key={i}
            >
              <NotificationMsg msg={msg} />
            </Transition>
          ))
        : null}
    </div>
  );
};

export default NotificationStack;
