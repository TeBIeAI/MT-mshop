<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {
    name: 'svg-icon',
    props: {
        iconClass: {
            type: String,
            required: true
        },
        className: {
            type: String
        }
    },
    computed: {
        iconName() {
            return `#icon-${this.iconClass}`
        },
        svgClass() {
            if (this.className) {
                return 'svg-icon ' + this.className
            } else {
                return 'svg-icon'
            }
        }
    }
}
</script>

<style lang="less" scoped>
@currentColor: red;
.svg-icon {
    width: 0.9rem;
    height: 0.9rem;
    vertical-align: 0.25em;
    fill: currentColor;
    overflow: hidden;
}
</style>
