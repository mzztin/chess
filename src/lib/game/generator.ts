import { Board, type Field, type Piece } from "./types";

export function generateFields(): Field[] {
    let fields: Field[] = [];

    for (let row = 1; row < 9; row++) {
        for (let column = 1; column < 9; column++) {
            fields.push({ row, column });
        }
    }

    return fields;
}

export function generatePieces() {
    let pieces: Piece[] = [];

    // Pawns
    for (let i = 1; i < 9; i++) {
        pieces.push({
            field: { row: 2, column: i },
            piece: "Pawn",
            color: "White",
        });
        pieces.push({
            field: { row: 7, column: i },
            piece: "Pawn",
            color: "Black",
        });
    }

    // Rooks
    pieces.push({
        field: { row: 1, column: 1 },
        piece: "Rook",
        color: "White",
    });
    pieces.push({
        field: { row: 1, column: 8 },
        piece: "Rook",
        color: "White",
    });
    pieces.push({
        field: { row: 8, column: 1 },
        piece: "Rook",
        color: "Black",
    });
    pieces.push({
        field: { row: 8, column: 8 },
        piece: "Rook",
        color: "Black",
    });

    // Knights
    pieces.push({
        field: { row: 1, column: 2 },
        piece: "Knight",
        color: "White",
    });
    pieces.push({
        field: { row: 1, column: 7 },
        piece: "Knight",
        color: "White",
    });
    pieces.push({
        field: { row: 8, column: 2 },
        piece: "Knight",
        color: "Black",
    });
    pieces.push({
        field: { row: 8, column: 7 },
        piece: "Knight",
        color: "Black",
    });

    // Bishops
    pieces.push({
        field: { row: 1, column: 3 },
        piece: "Bishop",
        color: "White",
    });
    pieces.push({
        field: { row: 1, column: 6 },
        piece: "Bishop",
        color: "White",
    });
    pieces.push({
        field: { row: 8, column: 3 },
        piece: "Bishop",
        color: "Black",
    });
    pieces.push({
        field: { row: 8, column: 6 },
        piece: "Bishop",
        color: "Black",
    });

    // Queens
    pieces.push({
        field: { row: 1, column: 4 },
        piece: "Queen",
        color: "White",
    });
    pieces.push({
        field: { row: 8, column: 4 },
        piece: "Queen",
        color: "Black",
    });

    // Kings
    pieces.push({
        field: { row: 1, column: 5 },
        piece: "King",
        color: "White",
    });
    pieces.push({
        field: { row: 8, column: 5 },
        piece: "King",
        color: "Black",
    });

    return pieces;
}

export function generateBoard(): Board {
    return new Board(generateFields(), generatePieces());
}
