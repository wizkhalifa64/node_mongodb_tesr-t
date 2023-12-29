import { Schema, model } from "mongoose";

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  employee_id: String,
  designation: String,
  gender: { type: Number, default: 0 },
  birth_date: { type: Date, required: true },
  email: { type: String, required: true, min: 1 },
  mobile: String,
  status: { type: Boolean, default: true },
  address: {
    city: String,
    state: String,
    country: String,
    postal_ode: String,
  },
  password: { type: String, required: true, min: 4 },
  is_delete: { type: Boolean, default: false },
  qualification: [
    { name: String, gread: String, institution: String, passout_year: Date },
  ],
  verification_details: {
    aadher_verified: { type: Boolean, default: false },
    pan_verified: { type: Boolean, default: false },
    academic_verified: { type: Boolean, default: false },
  },
  roles: {
    type: Schema.Types.ObjectId,
    ref: "Roles",
  },
});

const EmployeeModel = model("Employee", EmployeeSchema);
export default EmployeeModel;
