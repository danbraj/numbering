class Numbering {
    
    constructor(prefix, postfix, pad) {
        this.prefix = prefix;
        this.postfix = postfix;
        this.pad = pad;
    }
    get(idx) {
        let idxNumber = idx;
        if (idxNumber.toString().length <= this.pad) {
            const s = `0000000000${idx}`
            idxNumber = s.substr(s.length - this.pad);
        }
        return `${this.prefix}${idxNumber}${this.postfix}`;
    }
};

const prep = (prefix, postfix, pad = 0) => {
    
    return new Numbering(prefix, postfix, pad);
};

const recog = (content) => {

    const res = /(.*[^0-9])([0-9]+)([^0-9]*)$/.exec(content);
    return res ? new Numbering(res[1], res[3], res[2].length) : null;
};

module.exports = { prep, recog };