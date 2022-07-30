
/** Function used to catch async errors to parse the response */
export const asyncError = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(err => {
    console.error(err);
    next(err)
});
