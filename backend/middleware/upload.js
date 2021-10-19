import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, photo, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, photo, cb) {
    console.log("Multer", photo);
    cb(
      null,
      photo.fieldname + "-" + Date.now() + path.extname(photo.originalname)
    );
  },
});
let upload = multer({
  storage: storage,
  fileFilter: function (req, photo, cb) {
    checkFileType(photo, cb);
  },
}).single("photo");

function checkFileType(photo, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(
    path.extname(photo.originalname).toLowerCase()
  );
  // Check mime
  const mimetype = filetypes.test(photo.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

export default upload;
