const http = require("http");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const contentTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".pdf": "application/pdf",
    ".svg": "image/svg+xml"
};

const PORT = process.env.PORT || 8080;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '*****',
        pass: '*****'
    }
});

const server = http.createServer((req, res) => {
    if (req.url === "/send-email" && req.method === "POST") {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const requestData = JSON.parse(body);
            const { subject, content, sender } = requestData;

            console.log('subject:', subject);
            console.log('content:', content);
            console.log('sender:', sender);

            var mailOptions = {
                from: '*****',
                to: '*****',
                subject: subject,
                text: content + "\n\nFrom " + sender
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error)
                    console.log(error);
                else
                    console.log('Email sent: ' + info.response);
            });
        });
    } else {
        let filePath = req.url === "/" ? "/index.html" : req.url;
        filePath = path.join(__dirname, "public", filePath);

        const extname = path.extname(filePath);
        const contentType = contentTypes[extname] || "application/octet-stream";

        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code === "ENOENT") {
                    // File not found
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end("<h1>404 Not Found</h1>");
                } else {
                    // Server error
                    res.writeHead(500, { "Content-Type": "text/html" });
                    res.end("<h1>500 Internal Server Error</h1>");
                }
            } else {
                // Serve the file content
                res.writeHead(200, { "Content-Type": contentType });
                res.end(content);
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});