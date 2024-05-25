import { onChange } from "react-toastify/dist/core/store";

export default function SelectComponent({ label, value, onChange, options = [] }) {
  return (
    <div className="relative">
      <p className="pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 text-gray-600 ">
        {label}
      </p>
      <select
        value={value}
        onChange={onChange}
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4"
      >
        {
            options && options.length ? options.map((optionItem) => (<option id={optionItem.id} value={optionItem.value} key={optionItem.id}>{optionItem.label}</option>)) : <option id="" value={""}>Select</option>
        }
      </select>
    </div>
  );
}
