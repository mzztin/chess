<script lang="ts">
    export let name: string;
    export let href: string;
</script>

<a {href} class="link">
    <span>{name}</span>
</a>

<style lang="scss">
    a {
        display: inline-block;
        text-decoration: none;

        span {
            &:hover {
                color: #11ceae;
            }
        }
    }
</style>
