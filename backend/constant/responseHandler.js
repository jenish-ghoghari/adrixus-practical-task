module.exports = (res, code, message, data) => {
    if (res && code && (data || message)) {
        var obj = {
            code: code
        }
        if (message) obj['message'] = message
        if (data) obj["data"] = data
        return res.json(obj);
    }
}