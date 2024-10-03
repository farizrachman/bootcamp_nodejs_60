import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const CategoriesModel = mongoose.model("Categories", CategoriesSchema);

export default CategoriesModel;
