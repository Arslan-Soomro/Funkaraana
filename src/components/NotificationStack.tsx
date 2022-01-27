import NotificationMsg from "./NotificationMsg";

const NotificationStack = ({ msgs }: { msgs?: string[] }) => {
  return (
    <div className="fixed z-50 w-full flex flex-col gap-4 justify-center items-center p-4">
      {msgs != undefined && msgs.length > 0
        ? msgs.map((msg, i) => <NotificationMsg key={i} msg={msg} />)
        : null}
    </div>
  );
};

export default NotificationStack;
