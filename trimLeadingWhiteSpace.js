const trimLeadingWhiteSpace = s => {
    if (!s) return '';
    if (s[0] === ' ') return trimLeadingWhiteSpace(s.slice(1, s.length));
    return s;
};