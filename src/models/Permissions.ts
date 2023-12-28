import { Schema, model } from "mongoose";
export type Permission = {
  name: string;
};
const PermissionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
});
const PermissionModel = model("Permissions", PermissionSchema);
export default PermissionModel;
