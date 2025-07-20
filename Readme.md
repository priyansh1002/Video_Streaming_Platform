## 🎥 Video Streaming Platform (Backend)
A scalable backend for handling video uploads, processing, and streaming using Node.js, Express, and FFmpeg.

# 🚀 Features
Video Uploading: Supports receiving video files (e.g., MP4) via multipart form-data.

Transcoding & Processing: Uses cloudinary to transcode uploaded videos and prepare them for adaptive streaming.

Streaming Endpoints:

Byte‑range streaming: Efficient chunked delivery for smooth playback controls.

HLS streaming: Serves .m3u8 playlist and segmented .ts files for adaptive bitrate streaming.

Metadata Management: Stores video metadata (title, description, duration, paths) in easy-to-update JSON or a database.

CORS Support: Configured to work seamlessly with a frontend application.

# 📦 Tech Stack
Node.js with Express – RESTful API server.

bcrypt – Handles passwod hashing.

MongoDB / PostgreSQL / JSON – For storing video metadata.

Multer – File upload middleware for Express.

CORS – Enables secure cross-origin requests.

cloudinary - for vedio uploads

mongoose-aggregate-paginate-v2 - for smooth pagination

mongoose - for data modelling



