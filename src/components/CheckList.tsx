import CheckBox from "./CheckBox";

const CheckList = ({checks}: {checks: {name: string}[]}) => {
    return(
        <div className="text-sm space-y-2">
            {checks.map((check, i) => (
                <CheckBox key={i} label={check.name} />
            ))}
        </div>
    )
}

export default CheckList;