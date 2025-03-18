import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token

    if (token) {
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            req.body.userId = decodedToken.id; // Attach userId if valid
        } catch (error) {
            return res.status(401).json({ success: false, message: "Invalid Token" });
        }
    }
    
    next(); // Allow both guests & authenticated users to proceed
};

export default authUser;
