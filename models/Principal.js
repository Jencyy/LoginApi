import mongoose, { Schema } from "mongoose";

const PrincipalSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    createdAt: { type: Date, default: Date.now }
});
const PrincipalModel = mongoose.model('Principal', PrincipalSchema);

export default PrincipalModel;
