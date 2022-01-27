
const NotificationMsg = ({msg}: {msg: string}) => {
    return <div className="w-fit px-4 text-white text-sm xs:text-base py-2 rounded-full bg-sbrclr-600 shadow-sm shadow-sbrclr-300">
        {msg}
    </div>
}

export default NotificationMsg;