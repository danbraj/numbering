
const numbering = {
    prefix: '',
    postfix: '',
    pad: 0,
    prepare(prefix, postfix, pad) {
        this.prefix = prefix;
        this.postfix = postfix;
        this.pad = pad;
    },
    get(idx) {
        const s = `0000000000${idx}`
        const idxNumber = s.substr(s.length - this.pad);
        return `${this.prefix}${idxNumber}${this.postfix}`;
    }
};

const recon = (content, idx) => {

    const re = /(.*[^0-9])([0-9]+)([^0-9]*\.[a-z]{3,4})$/;

    const res = re.exec(content);
    if (res) {

        const s = `0000000000${idx}`
        const idxNumber = s.substr(s.length - res[2].length);
        return `${res[1]}${idxNumber}${res[3]}`;
        
    } else {
        return null;
    }
}

module.exports = { numbering, recon };