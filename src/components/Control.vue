<template>
    <label class="control">
        <p class="control__label">{{ label }}</p>
        <input
            class="control__input"
            :type="type"
            :value="value"
            :placeholder="placeholder || label"
            v-on="inputListeners"
        >
    </label>
</template>

<script>
export default {
    name: 'Control',
    props: {
        type: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        placeholder: String,
        value: String
    },
    computed: {
        inputListeners() {
            const self = this;

            return Object.assign({}, this.$listeners, {
                input(event) {
                    self.$emit('input', event.target.value);
                }
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.control {
    --border-color: rgba(0, 0, 0, 0.1);

    gap: 8px;
    display: grid;

    &__label {
        margin: 0;
    }

    &__input {
        height: 40px;
        padding: 4px 8px;
        border: 1px solid var(--border-color);
        box-sizing: border-box;
        border-radius: 4px;
        font: inherit;

        &:focus {
            --border-color: var(--primary-color);

            box-shadow: 0 0 0 1px var(--border-color);
            outline: none;
        }
    }
}
</style>