const mongoose = require("mongosse");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  user_id: { type: Number },
  username: { type: String },
  user_line_id: { type: String },
  user_pass: { type: String },
  user_address: { type: String },
  user_phone: { type: Number },
  user_status: { type: Number },
});

const productSchema = new Schema({
  prod_name: { type: String, required: true },
  prod_qty: { type: Number, required: true },
  pro_desc: { type: String, required: true },
  pro_date: { type: Date, default: Date.now },
  pro_status: { type: Number, required: true },
});

const Member = mongoose.model("Members", memberSchema, "member")
const Product = mongoose.model("Product", productSchema, "product")
const mySchemas = {'Members': Member,'Product':Product}

module.exports = mySchemas