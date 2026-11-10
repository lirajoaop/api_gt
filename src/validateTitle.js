const MAX_LENGTH = 100;

function validateTitle(title) {
    if (typeof title !== 'string') {
        return 'title must be a string';
    }
    if (title.trim() === '') {
        return 'title must not be empty';
    }
    if (title.length > MAX_LENGTH) {
        return `title must have at most ${MAX_LENGTH} characters`;
    }
    return null;
}

module.exports = validateTitle;