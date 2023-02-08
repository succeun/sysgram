const merge = (src, node) => {
    for (var x in node) {
        var aliase = node[x];
        if (aliase) {
            if (typeof aliase == "string") {
                var obj = src[x];
                if (obj) {
                    src[aliase] = obj;
                }
            } else {
                if (src[x]) {
                    merge(src[x], node[x]);
                } else {
                    src[x] = node[x];
                }
            }
        }
    }
}

export default {
    merge,
};