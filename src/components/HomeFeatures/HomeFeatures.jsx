import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeFeatures() {
  return (
    <>
      <section className="bg-white py-10">
        <div className="container px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4 rounded-lg border border-gray-100 p-4">
              <div className="text-primary-700 bg-primary-400/50 flex size-12 items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon="fa-solid fa-truck-fast"
                  className="text-xl"
                />
              </div>
              <div>
                <h3 className="mb-0.5 font-semibold">Free Delivery</h3>
                <p className="text-sm text-gray-500">Orders $50 or more</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg border border-gray-100 p-4">
              <div className="text-primary-700 bg-primary-400/50 flex size-12 items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon="fa-solid fa-rotate-left"
                  className="text-xl"
                />
              </div>
              <div>
                <h3 className="mb-0.5 font-semibold">30 Days Return</h3>
                <p className="text-sm text-gray-500">Satisfaction guaranteed</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg border border-gray-100 p-4">
              <div className="text-primary-700 bg-primary-400/50 flex size-12 items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon="fa-solid fa-shield-halved"
                  className="text-xl"
                />
              </div>
              <div>
                <h3 className="mb-0.5 font-semibold">Secure Payment</h3>
                <p className="text-sm text-gray-500">100% protected checkout</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg border border-gray-100 p-4">
              <div className="text-primary-700 bg-primary-400/50 flex size-12 items-center justify-center rounded-full">
                <FontAwesomeIcon
                  icon="fa-solid fa-headset"
                  className="text-xl"
                />
              </div>
              <div>
                <h3 className="mb-0.5 font-semibold">24/7 Support</h3>
                <p className="text-sm text-gray-500">Ready to help anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
