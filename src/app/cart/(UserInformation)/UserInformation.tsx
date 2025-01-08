import ShippingAddress from "./ShippingAddress";

const UserInformation = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-sm">
      <h2 className="text-lg lg:text-xl text-center md:text-left font-medium italic mt-10 mb-4 bg-gray-700">
        Shipping Address
      </h2>
      <ShippingAddress />
    </div>
  );
};

export default UserInformation;
