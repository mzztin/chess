<script lang="ts">
    import { generateBoard } from "$lib/game/generator";
    import type { Board, Color } from "$lib/game/types";
    import Field from "./game/Field.svelte";
    import Piece from "./game/Piece.svelte";

    export const board: Board = generateBoard();
    $: board;
    export let viewAs: Color = "White";

    let piece;
</script>

<main>
    <h3>{board.currentMove} has to play</h3>

    <div class={`board view-as-${viewAs == "White" ? "white" : "black"}`}>
        {#if viewAs == "White"}
            {#each board.fields.reverse() as field}
                <Field {field} viewAs={viewAs}>
                    {#if (piece = board.getPiece(field))}

                        <Piece {piece} />
                    {/if}
                </Field>
            {/each}
        {:else}
            {#each board.fields as field}
                <Field {field} viewAs={viewAs}>
                    {#if (piece = board.getPiece(field))}

                        <Piece {piece} />
                    {/if}
                </Field>
            {/each}
        {/if}
    </div>
</main>

<style lang="scss">
    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h3 {
        position: absolute;
        top: -10%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .board {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(-8, 1fr);
    }

    span {
        position: absolute;
    }
</style>
