import { Schema, model } from "mongoose";

const RoleSchema = new Schema({
  roleName: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  permissions: {
    type: [
      {
        _id: String,
        name: String,
      },
    ],
    default: [],
  },
});

const Roles = model("Roles", RoleSchema);
export default Roles;
