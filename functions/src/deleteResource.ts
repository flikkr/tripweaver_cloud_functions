import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

exports.deleteResource = functions.firestore
    .document("trips/{tripId}")
    .onDelete(async (snap, context) => {
      const {tripId} = context.params;

      const filePath = `trips/${tripId}/cover-image.jpg`;
      console.log(`Deleting in progress: ${filePath}`);

      const bucket = admin.storage().bucket(process.env.BUCKET_NAME);
      bucket
          .file(filePath)
          .delete()
          .catch((err) => {
            console.error(`${err.code}: Could not delete ${filePath}`);
          });
    });
