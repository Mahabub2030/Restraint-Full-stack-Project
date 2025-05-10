import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const loadedData = useLoaderData(); // this will be the raw Response object
    const { name, category, recipe, price, _id } = loadedData;    

  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const imageFile = { image: data.image[0] };

      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const imageUrl = res.data.data.display_url;
        const updatedMenuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: imageUrl,
        };

        const menuRes = await axiosSecure.patch(
          `/menu/${_id}`,
          updatedMenuItem
        );

        if (menuRes.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} has been updated successfully.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error("Error updating item:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while updating the item!",
      });
    }
  };

  return (
    <div>
      <SectionTitle heading="Update an Item" subHeading="Refresh info" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Category and Price */}
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              defaultValue={recipe}
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Enter the recipe details"
            />
          </div>

          {/* Image Upload */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Upload New Image*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary">Update Menu Item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
