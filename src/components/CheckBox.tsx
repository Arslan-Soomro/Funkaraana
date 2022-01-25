
const CheckBox = ({ label }: { label: string }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="appearance-none checked:checkmark-icon h-4 w-4 border rounded checked:bg-brclr-600 checked:border-transparent"
      />
      <span className="text-nclr-700">{label}</span>
    </label>
  );
};

export default CheckBox;
