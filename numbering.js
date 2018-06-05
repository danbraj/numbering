class Numbering {
    
    constructor(prefix, postfix, pad) {
        this.prefix = prefix;
        this.postfix = postfix;
        this.pad = pad;
    }
    get(idx) {
        return `${this.prefix}${idx.toString().padStart(this.pad, '0')}${this.postfix}`;
    }
};

const prep = (prefix, postfix, pad = 0) => {
    
    return new Numbering(prefix, postfix, pad);
};

const recog = (content) => {

    const res = /(.*[^0-9]|)([0-9]+)([^0-9]*)$/.exec(content);
    return res ? new Numbering(res[1], res[3], res[2].length) : -1;
};

module.exports = { prep, recog };