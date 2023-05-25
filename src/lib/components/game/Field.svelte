<script lang="ts">
    import type { Color, Field } from "$lib/game/types";
    import { colorOfField, fieldToString } from "$lib/game/utils";

    export let field: Field;
    export let viewAs: Color;

    const color = colorOfField(field);
</script>

<div
    class={`field ${color == "White" ? "white" : "black"} ${fieldToString(
        field
    ).toLowerCase()} view-as-${viewAs.toLowerCase()}`}
>
    <p class="${color == 'White' ? 'white' : 'black'}">
        {fieldToString(field)}
    </p>

    <div class="img">
        <slot />
    </div>
</div>

<style lang="scss">
    .field {
        display: flex;

        width: $field-size;
        height: $field-size;

        p {
            font-size: 12px;
            text-align: left end;
            margin: 0;
            padding: 0;
            padding-right: 5px;
            padding-bottom: 5px;
        }

        .img {
            display: flex;
            justify-content: center;
            align-self: center;
        }

        &.white {
            background-color: $white-field-color;

            p {
                color: $black-field-color;
            }
        }

        &.black {
            background-color: $black-field-color;

            p {
                color: $white-field-color;
            }
        }
    }
</style>
