import ShippingAddress from "./ShippingAddress";

const UserInformation = () => {
  return (
    <div className="sm:w-[65%] lg:w-auto mx-auto lg:mx-0 bg-gray-700 p-4 rounded-md mt-10 lg:mt-0">
      <h2 className="text-lg lg:text-xl text-center md:text-left font-medium italic mt-10 mb-4 bg-gray-700">
        Shipping Address
      </h2>
      <ShippingAddress />
    </div>
  );
};

export default UserInformation;
