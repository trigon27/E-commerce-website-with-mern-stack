const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const productsRouter = require("./routes/Products");
const brandsRouter = require("./routes/Brand");
const categoryRouter = require("./routes/Categories");
const UserRouter = require("./routes/User");
const AuthRouter = require("./routes/Auth");
const CartRouter = require("./routes/Cart");
const OrderRouter = require("./routes/Order");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const JwtStrategy = require("passport-jwt").Strategy;
const cookiParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const { User } = require("./model/User");
const { isAuth, sanitizeUser, cookieExtractor } = require("./services/common");
const LocalStrategy = require("passport-local").Strategy;

const SECRET_KEY = "SECRET_KEY";
// JWT options
const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = SECRET_KEY; // TODO: should not be in code;

// Middleware
server.use(express.static("build"));
server.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
server.use(cookiParser());

// Initialize Passport
server.use(passport.initialize());
server.use(passport.session());

server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);

server.use(express.json());

server.use("/products", isAuth(), productsRouter.router);
server.use("/brands", isAuth(), brandsRouter.router);
server.use("/categories", isAuth(), categoryRouter.router);
server.use("/users", isAuth(), UserRouter.router);
server.use("/auth", AuthRouter.router);
server.use("/Cart", isAuth(), CartRouter.router);
server.use("/orders", isAuth(), OrderRouter.router);

// Passport strategy
passport.use(
  "local",

  new LocalStrategy({ usernameField: "email" }, async function (
    email,
    password,
    done
  ) {
    try {
      const user = await User.findOne({ email: email }).exec();
      console.log(email, password, user);
      if (!user) {
        return done(null, false, { message: "no such user email" });
      }

      crypto.pbkdf2(
        password,
        user.salt,
        310000,
        32,
        "sha256",
        async function (err, hashedPassword) {
          if (
            !crypto.timingSafeEqual(
              Buffer.from(user.password, "hex"),
              hashedPassword
            )
          ) {
            return done(null, false, { message: "invalid credentials" });
          }
          const token = jwt.sign(sanitizeUser(user), SECRET_KEY);
          done(null, { id: user.id, role: user.role });
        }
      );
    } catch (err) {
      done(err);
    }
  })
);

passport.use(
  "jwt",
  new JwtStrategy(opts, async function (jwt_payload, done) {
    console.log({ jwt_payload });
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, sanitizeUser(user)); // this calls serializer
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, { id: user.id, role: user.role });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// Database connection
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shaikhpc0786:YA6F6wLB3x0kyw7m@cluster0.sknggfz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

// Call the function to connect to MongoDB
connectToMongoDB();

server.listen(8080, () => {
  console.log("Server is started on port 8080");
});
