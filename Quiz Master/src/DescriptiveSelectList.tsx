import { ChangeEvent, useState } from "react";

export interface OptionValue {
  label: string | undefined;
  value: any;
  description: string | undefined;
}

export interface SelectListOptions {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  optionValues: Array<OptionValue>;
  label: string;
  id: string;
  value: any;
}

export const DescriptiveSelectList = (options: SelectListOptions) => {
  const [description, setDescription] = useState<string | undefined>();
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDescription(
      options.optionValues.find((s) => s.value == e.target.value)?.description
    );
    options.onChange(e);
  };
  return (
    <>
      <p>
        <label htmlFor={options.id}>{options.label}: </label>
        <select value={options.value} onChange={onChange} id={options.id}>
          {options.optionValues.map(({ value, label }, _) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </p>
      <p>
        <code>{description}</code>
      </p>
    </>
  );
};
