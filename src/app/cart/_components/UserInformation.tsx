import ShippingAddress from "./ShippingAdress"

const UserInformation = () => {
  return (
    <div className="sm:w-[65%] lg:w-auto mx-auto lg:mx-0 bg-gray-700 p-4 rounded-md mt-10 lg:mt-0">
      <h2 className="text-lg lg:text-xl text-center md:text-left font-medium italic mt-10 mb-4 bg-gray-700">
        Shipping Address{" "}
        <span className="text-sm ml-3 text-white bg-transparent">
          (Shipping will be based on this address)
        </span>
      </h2>
      <ShippingAddress />
    </div>
  );
};

export default UserInformation;
