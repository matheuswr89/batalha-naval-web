import colors from "../../styles/colors";
import { BoardTable, Square, TD, Text } from "./style";

interface BoardProps {
  matriz: string[][];
  clickable: boolean;
}

const Board = ({ matriz }: BoardProps) => {
  let key = 0;
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  return (
    <BoardTable>
      <tbody>
        {matriz.map((col, i) => (
          <tr key={key++}>
            <TD className={`number${i}`}>{i}</TD>
            {col.map((lin, j) => (
              <td key={key++}>
                {i === 0 && <Text>{letters[j]}</Text>}
                <Square
                  backgroudColor={lin === "0" ? colors.blueMap : colors.default}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </BoardTable>
  );
};

export default Board;
