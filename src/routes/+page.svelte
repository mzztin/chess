<script>
    import Board from "$lib/components/Board.svelte";
    import { generateBoard } from "$lib/game/generator";


    let board = generateBoard();
</script>

<h1>Chess Game</h1>
<Board viewAs="White" {board} />

<style lang="scss">
    h1 {
        position: absolute;
        left: 50%;
        top: 5%;
        transform: translate(-50%, -50%);
    }
</style>
