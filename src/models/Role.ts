import { Schema, model } from "mongoose";
import PermissionModel from "./Permissions";

const RoleSchema = new Schema({
  roleName: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  permissions: {
    type: [PermissionModel.schema],
    default: [],
  },
});

const Roles = model("Roles", RoleSchema);
export default Roles;
