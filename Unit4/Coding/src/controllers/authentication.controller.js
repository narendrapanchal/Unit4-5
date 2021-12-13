require("dotenv").config();
const jwt=require("jsonwebtoken");
const User=require("../models/user.model");
const {validationResult}=require("express-validator");