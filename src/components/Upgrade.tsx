import { ZapIcon } from "lucide-react";

export const Upgrade = () => {
  return (
    <>
      <div className="bg-black mt-4 rounded-2xl flex-col items-center text-center p-2 hidden group-hover:flex">
        <div>
          <ZapIcon className="bg-gray-100 rounded-full size-8 p-2" />
        </div>
        <div className="text-gray-100">
          <h3>Upgrade your account</h3>
          <small>Unlock exclusive features</small>
        </div>
        <button className="bg-gray-100 w-full p-2 mt-4 rounded-md">
          Upgrade to Pro
        </button>
      </div>
    </>
  );
};
