import * as admin from "firebase-admin";

admin.initializeApp();
import deleteResource = require("./deleteResource");

exports.deleteResource = deleteResource;
