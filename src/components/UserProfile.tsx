export const UserProfile = () => {
  return (
    <>
      <div className="flex gap-4 items-center my-8">
        <div className="w-8 aspect-square bg-gray-200 rounded-full flex-shrink-0">
          {/* <img src="/memoji.png" alt="memoji image" width={16} height={16} /> */}
        </div>
        <div className="h-8 hidden group-hover:block">
          <p className="font-medium">Samuel Boafo</p>
          <small>Super Admin</small>
        </div>
      </div>
    </>
  );
};
