import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import ErrorState from "../../components/ErrorState/ErrorState";
import Loading from "../../components/Loading/Loading";
import useAddress, {
  useAddNewAddress,
  useRemoveAddress,
} from "../../hooks/useAddress";
import PageMetaTags from "../PageMetaTag/PageMetaTag";

export default function Address() {
  const { addresses, isLoading, isError, error, refetch } = useAddress();
  const [showForm, setShowForm] = useState(false);
  const { mutate: addNewAddress, isPending: isAdding } = useAddNewAddress();
  const {
    mutate: removeAddressById,
    isPending: isRemoving,
    variables: removingId,
  } = useRemoveAddress();

  const phoneRegex = /^01[0125][0-9]{8}$/;

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Address name is required")
      .min(3, "Address name must be at least 3 chars"),

    details: yup.string().required("Address details is required"),

    phone: yup
      .string()
      .required("Phone number is required")
      .matches(phoneRegex, "Only accept Egyptian numbers"),

    city: yup.string().required("City is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      details: "",
      phone: "",
      city: "",
    },

    validationSchema,

    onSubmit: (values, { resetForm }) => {
      addNewAddress(values, {
        onSuccess: () => {
          resetForm();
          setShowForm(false);
        },
      });
    },
  });

  async function handleRemoveAddress(id) {
    const alert = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (alert.isConfirmed) {
      removeAddressById(id);
    }
  }

  if (isLoading) return <Loading />;

  if (isError || !addresses)
    return (
      <ErrorState
        title="We couldn't load your addresses"
        message={error?.message}
        onRetry={refetch}
      />
    );


  return (
    <>
      <PageMetaTags
        title="My Addresses | FreshCart"
        description="FreshCart - Manage your shipping addresses. Add and view your saved addresses for a faster checkout."
      />
      <section>
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-3 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary-100 rounded-lg p-2">
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                className="text-primary-600 h-5 w-5"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Addresses</h1>
              <p className="mt-0.5 text-sm text-gray-600">
                {addresses.length} saved addresses
              </p>
            </div>
          </div>

          {!showForm && (
            <button
              type="button"
              className="btn bg-primary-600 hover:bg-primary-700 flex items-center gap-2 text-white"
              onClick={() => {
                formik.resetForm();
                setShowForm(true);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-plus" />
              <span>Add Address</span>
            </button>
          )}
        </div>

        {/* Add New Address Form */}
        {showForm && (
          <form
            className="mb-8 rounded-lg border border-gray-200 p-5 sm:p-6"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="mb-4 text-xl font-semibold">Add New Address</h2>

            <div className="space-y-4">
              {/* Name */}
              <div className="name flex flex-col gap-2">
                <label htmlFor="name" className="text-sm">
                  Address Name *
                </label>
                <div className="relative">
                  <input
                    className="input-control w-full ps-10"
                    type="text"
                    id="name"
                    placeholder="Home"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-tag"
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-lg text-gray-400"
                  />
                </div>
                {formik.touched.name && formik.errors.name && (
                  <p className="text-sm text-red-500">*{formik.errors.name}</p>
                )}
              </div>

              {/* Phone + City */}
              <div className="flex flex-col gap-4 *:grow sm:flex-row">
                <div className="phone flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      className="input-control w-full ps-10"
                      type="tel"
                      id="phone"
                      placeholder="01010700700"
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FontAwesomeIcon
                      icon="fa-solid fa-phone"
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-lg text-gray-400"
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-sm text-red-500">
                      *{formik.errors.phone}
                    </p>
                  )}
                </div>

                <div className="city flex flex-col gap-2">
                  <label htmlFor="city" className="text-sm">
                    City *
                  </label>
                  <div className="relative">
                    <input
                      className="input-control w-full ps-10"
                      type="text"
                      id="city"
                      placeholder="Giza"
                      name="city"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FontAwesomeIcon
                      icon="fa-solid fa-city"
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-lg text-gray-400"
                    />
                  </div>
                  {formik.touched.city && formik.errors.city && (
                    <p className="text-sm text-red-500">
                      *{formik.errors.city}
                    </p>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="details flex flex-col gap-2">
                <label htmlFor="details" className="text-sm">
                  Address Details *
                </label>
                <div className="relative">
                  <textarea
                    className="input-control max-h-60 min-h-30 w-full ps-10"
                    id="details"
                    placeholder="Enter your full address details"
                    name="details"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  <FontAwesomeIcon
                    icon="fa-solid fa-map-location-dot"
                    className="absolute top-4 left-3 text-lg text-gray-400"
                  />
                </div>
                {formik.touched.details && formik.errors.details && (
                  <p className="text-sm text-red-500">
                    *{formik.errors.details}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isAdding}
                  className="btn bg-primary-600 hover:bg-primary-700 flex items-center gap-2 text-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <FontAwesomeIcon
                    icon={
                      isAdding ? "fa-solid fa-spinner" : "fa-solid fa-check"
                    }
                    spin={isAdding}
                  />
                  <span>{isAdding ? "Saving..." : "Save Address"}</span>
                </button>
                <button
                  type="button"
                  disabled={isAdding}
                  className="btn border border-gray-500/20 bg-white font-normal disabled:cursor-not-allowed disabled:opacity-70"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Saved Addresses */}
        {addresses.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <FontAwesomeIcon
              icon="fa-regular fa-map"
              className="text-6xl text-gray-400"
            />
            <p>No addresses found</p>
            <p className="text-gray-500">
              Click on Add Address to save your first address for a faster
              checkout
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {addresses.map((address) => {
              return (
                <div
                  key={address._id}
                  className="hover:border-primary-600 rounded-lg border border-gray-200 p-5 transition-colors duration-200"
                >
                  {/* Card Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-100 text-primary-600 rounded-lg p-2.5 text-lg">
                        <FontAwesomeIcon icon="fa-solid fa-house" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{address.name}</h3>
                        <p className="text-sm text-gray-500">{address.city}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={isRemoving && removingId === address._id}
                      className="flex size-9 items-center justify-center rounded-lg text-red-500 transition-colors duration-200 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
                      title="Remove Address"
                      onClick={() => handleRemoveAddress(address._id)}
                    >
                      <FontAwesomeIcon
                        icon={
                          isRemoving && removingId === address._id
                            ? "fa-solid fa-spinner"
                            : "fa-solid fa-trash"
                        }
                        spin={isRemoving && removingId === address._id}
                      />
                    </button>
                  </div>

                  {/* Card Info */}
                  <ul className="space-y-2 text-sm text-gray-600 *:flex *:items-center *:gap-2">
                    <li>
                      <FontAwesomeIcon
                        icon="fa-solid fa-map-location-dot"
                        className="text-gray-400"
                      />
                      <span>{address.details}</span>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon="fa-solid fa-phone"
                        className="text-gray-400"
                      />
                      <span>{address.phone}</span>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
