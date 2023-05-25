<script lang="ts">
    import type { Piece } from "$lib/game/types";
    import { getPathOfPieceSVG, pieceNameToString, pieceToString } from "$lib/game/utils";


    export let piece: Piece;
    
    console.log(getPathOfPieceSVG(piece.piece, piece.color))

</script>

<div class={`piece ${piece.color == "White" ? "white" : "black"}`}>
    <img src={getPathOfPieceSVG(piece.piece, piece.color)} alt={pieceNameToString(piece.piece)} />
</div>

<style lang="scss">
    .piece {
        width: $piece-size;
        height: $piece-size;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: $piece-size;
    

        img {
            width: $piece-size;
            height: $piece-size;
            
        }

        &.black {
            color: $black-field-color;
            -webkit-text-stroke: 2px $white-field-color;
        }

        &.white {
            color: $white-field-color;
            -webkit-text-stroke: 2px $black-field-color;
        }
    }
</style>