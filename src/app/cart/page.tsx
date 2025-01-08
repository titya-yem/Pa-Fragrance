import OrderButtons from "./OrderButtons";
import UserInformation from "./(UserInformation)/UserInformation";

const cart = () => {
  return (
    <main className="container">
      <h1 className="text-3xl lg:text-4xl font-medium italic text-center mb-10">
        Cart
      </h1>
      <div className="flex flex-col justify-between lg:flex-row">
        <OrderButtons />
        <UserInformation />
      </div>
    </main>
  );
};

export default cart;
