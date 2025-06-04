import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    nin: {
      type: String,
      required: [true, "NIN is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    LGA: {
      type: String,
      required: [true, "LGA is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    occupation: {
      type: String,
      required: [true, "Occupation is required"],
    },
    employer: {
      type: String,
      required: [true, "Employer is required"],
    },
    monthlyEarnings: {
      type: Number,
      required: [true, "Monthly earnings are required"],
    },
    selectedInvestment: {
      type: String,
      required: [true, "Selected investment is required"],
    },
    selectedContribution: {
      type: String,
      required: [true, "Selected contribution is required"],
    },
    contributionFrequency: {
      type: String,
      required: [true, "Contribution frequency is required"],
    },
    Bemail: {
      type: String,
      required: [true, "Backup email is required"],
    },
    BVN: {
      type: String,
      required: [true, "BVN is required"],
    },
    utilityBill: {
      type: String,
      required: [true, "Utility bill is required"],
    },
    validated: {
      type: Boolean,
      default: false,
    },
    nextOfKin: {
      fullname: {
        type: String,
        required: [true, "Next of kin fullname is required"],
      },
      relationship: {
        type: String,
        required: [true, "Next of kin relationship is required"],
      },
      phone: {
        type: String,
        required: [true, "Next of kin phone is required"],
      },
      email: {
        type: String,
        required: [true, "Next of kin email is required"],
      },
      address: {
        type: String,
        required: [true, "Next of kin address is required"],
      },
    },
    verificationToken: {
      type: String, // Store the verification token
    },
    verificationTokenExpiresAt: {
      type: Date, // Store the expiration date of the token
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpiresAt: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: Number,
    },
    verificationCodeExpiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Hash the password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare passwords
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);

export default User; // Use default export