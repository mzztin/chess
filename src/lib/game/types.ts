export type Pieces = "King" | "Queen" | "Knight" | "Bishop" | "Rook" | "Pawn";
export type Color = "White" | "Black";

export type Field = {
    row: number;
    column: number;
};

export type Piece = {
    field: Field;
    piece: Pieces;
    color: Color;
};

export class Board {
    public currentMove: Color = "White";

    constructor(public readonly fields: Field[], public readonly pieces: Piece[]) {

    }

    public getPiece(field: Field): Piece | undefined {
        return this.pieces.find(piece => piece.field.row === field.row && piece.field.column === field.column);
    }


};
