
const validateTransaction = (req, res, next) => {
    const { amount, currency, description } = req.body;
    
    if (!amount || typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({
            success: false,
            message: 'Invalid amount. Amount must be a positive number.'
        });
    }
    
    if (!currency || typeof currency !== 'string' || currency.length !== 3) {
        return res.status(400).json({
            success: false,
            message: 'Invalid currency. Currency must be a 3-letter code (e.g., USD).'
        });
    }
    
    if (!description || typeof description !== 'string' || description.length < 3) {
        return res.status(400).json({
            success: false,
            message: 'Invalid description. Description must be at least 3 characters long.'
        });
    }
    
    next();
};

const validateAuth = (req, res, next) => {
    const { username, password } = req.body;
    
    if (!username || typeof username !== 'string' || username.length < 3) {
        return res.status(400).json({
            success: false,
            message: 'Invalid username. Username must be at least 3 characters long.'
        });
    }
    
    if (!password || typeof password !== 'string' || password.length < 6) {
        return res.status(400).json({
            success: false,
            message: 'Invalid password. Password must be at least 6 characters long.'
        });
    }
    
    next();
};

module.exports = {
    validateTransaction,
    validateAuth
};
