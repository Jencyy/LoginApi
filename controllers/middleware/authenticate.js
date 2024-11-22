import jwt from 'jsonwebtoken';

export const authenticateToken = (roles) => (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    jwt.verify(token,process.env.SECRET_KEY , (err, decoded) => {
        if (err || !roles.includes(decoded.role)) return res.status(403).json({ message: 'Forbidden' });
        else {

            req.user = decoded;
            res.status(200).json({message: "we are best friends"})
            console.log("done",req.user)
        }
        next();
    });
};