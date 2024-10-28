import { Controller } from "react-hook-form";
import { Input } from "@nextui-org/react";

const InputField = (type, name, placeholder, className, defaultValue) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              defaultValue={defaultValue}
              className={className}
            />
          </div>
        )}
      />
    </>
  );
};

export default InputField;
