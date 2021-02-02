import Index from "./index.taj";

export default {
    components: {
        Index
    },
    methods: {
        name() {
            this.Index();
            console.log("this", this);
        }
    }
}

export function sayMyName(name) {
    alert(name);
}