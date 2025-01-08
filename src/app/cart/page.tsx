import OrderButtons from "./OrderButtons";

const cart = () => {
  return (
    <main className="container">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10">
        Cart
      </h1>
      <div className="flex flex-col gap-4">
        <OrderButtons />
      </div>
    </main>
  );
};

export default cart;
