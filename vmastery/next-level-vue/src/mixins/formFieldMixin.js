export const formFieldMixin = {
    inheritAttrs: false,
    props: {
        value: [String, Number],
        label: String
    },
    methods: {
        updateValue(event) {
            // <-- method triggered by input event
            this.$emit('input', event.target.value)
        }
    }
}