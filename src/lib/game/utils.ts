import type { Color, Field, Piece, Pieces } from "./types";

export function fieldToString(field: Field): string {
    return `${String.fromCharCode(96 + field.column)}${field.row}`;
}

export function pieceNameToString(piece: Pieces) {
    switch (piece) {
        case "King":
            return "K";
        case "Queen":
            return "Q";
        case "Knight":
            return "N";
        case "Bishop":
            return "B";
        case "Rook":
            return "R";
        case "Pawn":
            return "P";
    }
}

export function pieceToString(piece: Piece) {
    return `${pieceNameToString(piece.piece)}${fieldToString(piece.field)}`;
}

export function colorOfField(field: Field): Color {
    return (field.row + field.column) % 2 === 0 ? "White" : "Black";
}

export function getPathOfPieceSVG(piece: Pieces, color: Color) {

    return `/pieces/${color == "White" ? "white/" : "black/"}${piece.toLowerCase()}.svg`;
}