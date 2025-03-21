const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: "dxsdzgqjs",  
    api_key: "593513178758813",
    api_secret: "V2KQ5S0J1aD7g1LTl4BDYxmNER4"
});

// Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        if (!file) {
            throw new Error("File is missing in request");
        }

        const isImage = file.mimetype && file.mimetype.startsWith("image");
        if (!isImage) {
            throw new Error("Invalid file type: Only images are allowed");
        }

        return {
            folder: "VibeonTop_products",
            resource_type: "image",
            public_id: file.originalname.split(".")[0],
            format: "jpg",
            transformation: [{ quality: "auto", fetch_format: "auto" }]
        };
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 100 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        if (!file) {
            return cb(new Error("No file uploaded!"), false);
        }

        const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Only image files (JPEG, PNG, JPG) are allowed!"), false);
        }
    }
});

module.exports = upload;
