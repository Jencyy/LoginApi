import jwt from 'jsonwebtoken';

export const authenticateToken = (roles) => (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    jwt.verify(token, "hello", (err, decoded) => {
        if (err || !roles.includes(decoded.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        } else {
            req.user = decoded; // Attach the decoded token data to the request object
            console.log("Token verified", req.user); // Optional logging for debugging
            next(); // Proceed to the next middleware/route handler
        }
    });
};
    