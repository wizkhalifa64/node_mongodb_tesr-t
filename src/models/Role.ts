import { Schema, model } from "mongoose";
import Permission from "./Permissions";

const RoleSchema = new Schema({
  roleName: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  permissions: {
    type: [{ type: Schema.Types.ObjectId, ref: "Permissions" }],
    default: [],
  },
});

const Roles = model("Roles", RoleSchema);
export default Roles;
