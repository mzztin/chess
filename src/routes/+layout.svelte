<script>
    import Link from "$lib/components/Link.svelte";
    import "../app.scss";
</script>

<main>
    <header />

    <slot />

    <footer>
        <p>Made by <Link href="https://mzztin.dev" name="mzztin" /></p>
    </footer>
</main>

<style lang="scss">
    main {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;

        background-color: $primary-color;
        overflow-y: hidden;
    }

    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: $secondary-color;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
